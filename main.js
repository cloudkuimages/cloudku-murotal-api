import express from 'express';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import axios from 'axios';
import CloudkuMurotalAPI from 'cloudku-murotal';

const app = express();
const PORT = process.env.PORT || 5500;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const EMAIL_FILE = path.join(__dirname, 'data', 'email.json');
const murotalAPI = new CloudkuMurotalAPI();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function readEmails() {
    try {
        const data = await fs.readFile(EMAIL_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

async function writeEmails(emails) {
    await fs.writeFile(EMAIL_FILE, JSON.stringify(emails, null, 2));
}

function generateRandomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function generateRandomPassword(length = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

app.use('/', express.static(path.join(__dirname, 'app')));

app.post('/api/tempmail/generate', async (req, res) => {
    try {
        const password = generateRandomPassword();
        const username = generateRandomString(10);
        const domains = ['1secmail.com', '1secmail.org', '1secmail.net', 'kzccv.com', 'qiott.com'];
        const domain = domains[Math.floor(Math.random() * domains.length)];
        const generatedEmail = `${username}@${domain}`;
        
        const emailData = {
            email: generatedEmail,
            password: password,
            createdAt: new Date().toISOString()
        };
        
        const emails = await readEmails();
        emails.push(emailData);
        await writeEmails(emails);
        
        res.json({
            status: 'success',
            creator: 'AlfiDev',
            result: emailData
        });
    } catch (error) {
        console.error('Error generating email:', error);
        res.status(500).json({
            status: 'error',
            creator: 'AlfiDev',
            message: 'Failed to generate email',
            error: error.message
        });
    }
});

app.get('/api/tempmail/list', async (req, res) => {
    try {
        const emails = await readEmails();
        res.json({
            status: 'success',
            creator: 'AlfiDev',
            result: emails
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            creator: 'AlfiDev',
            message: 'Failed to fetch emails'
        });
    }
});

app.get('/api/tempmail/inbox/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const [login, domain] = email.split('@');
        
        try {
            const response = await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`, {
                timeout: 5000
            });
            res.json({
                status: 'success',
                creator: 'AlfiDev',
                result: response.data
            });
        } catch (apiError) {
            res.json({
                status: 'success',
                creator: 'AlfiDev',
                result: [],
                note: 'External API not accessible. Email service may be temporarily unavailable.'
            });
        }
    } catch (error) {
        console.error('Error fetching inbox:', error);
        res.status(500).json({
            status: 'error',
            creator: 'AlfiDev',
            message: 'Failed to fetch inbox'
        });
    }
});

app.get('/api/tempmail/message/:email/:id', async (req, res) => {
    try {
        const email = req.params.email;
        const id = req.params.id;
        const [login, domain] = email.split('@');
        
        try {
            const response = await axios.get(`https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${id}`, {
                timeout: 5000
            });
            res.json({
                status: 'success',
                creator: 'AlfiDev',
                result: response.data
            });
        } catch (apiError) {
            res.json({
                status: 'error',
                creator: 'AlfiDev',
                message: 'External API not accessible'
            });
        }
    } catch (error) {
        console.error('Error fetching message:', error);
        res.status(500).json({
            status: 'error',
            creator: 'AlfiDev',
            message: 'Failed to fetch message'
        });
    }
});

app.get('/api/murotal/kota', async (req, res) => {
    try {
        const cities = await murotalAPI.getAllCities();
        res.json({
            status: 'success',
            creator: 'AlfiDev',
            result: cities
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            creator: 'AlfiDev',
            message: 'Failed to fetch cities'
        });
    }
});
//==================( Kalau Mau Nambah Fitur Tambahin sendiri yah error juga benerin sendiri)===================//
app.listen(PORT, () => {
    console.log(chalk.cyan(`Server running on port ${PORT}`));
}); 
