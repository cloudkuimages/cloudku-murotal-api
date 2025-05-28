import express from 'express';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  getCities,
  getPrayerTimes,
  getPrayerTimesByMonth,
  searchCities,
  getHijriDate,
  getTodayHijriDate,
  getSurahList,
  getSurahByNumber,
  getAyahByNumber,
  getAyahBySurahAndAyah,
  getAyahBySurahAndAyahWithLength,
  getAyahBySurahAndRange,
  getRandomAyah,
  getAyahByJuz,
  getRandomSurah,
  getAllHusna,
  getHusnaByNumber,
  getRandomHusna,
  getAyahByTheme,
  getAllThemes
} from 'naruyaizumi';

const app = express();
const PORT = process.env.PORT || 5500;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'app')));
app.get('/api/murotal/kota', async (req, res) => {
    try {
        const cities = await getCities();
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
