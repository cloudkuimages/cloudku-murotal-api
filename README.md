# Murotal API

Powerful and efficient API for accessing Quranic recitations (Murotal) with comprehensive features and easy integration.

## 🚀 Features

- **Complete Quran Recitations** - Access full Quran audio from various renowned reciters
- **Multiple Reciters** - Choose from different qaris with high-quality audio
- **Surah & Verse Access** - Get specific surahs or individual verses
- **Audio Formats** - Multiple audio format support (MP3, etc.)
- **Fast Response** - Optimized for speed and reliability
- **Easy Integration** - Simple REST API endpoints
- **Comprehensive Metadata** - Detailed information about surahs, verses, and reciters

## 📖 Documentation

Complete API documentation available at: **[cloudku.us.kg](https://cloudku.us.kg)**

## 🛠️ Installation & Usage

### Basic Endpoint
```
GET /api/murotal/{reciter}/{surah}
GET /api/murotal/{reciter}/{surah}/{verse}
```

### Example Request
```bash
curl https://api.example.com/murotal/abdulbasit/001
```

### Response Format
```json
{
  "status": "success",
  "data": {
    "surah": 1,
    "name": "Al-Fatihah",
    "reciter": "Abdul Basit",
    "audio_url": "https://...",
    "duration": "02:30"
  }
}
```

## 🔗 Available Endpoints

- `/reciters` - List all available reciters
- `/surahs` - Get all surah information
- `/murotal/{reciter}` - Get all recitations by specific reciter
- `/murotal/{reciter}/{surah}` - Get specific surah recitation
- `/search?q={query}` - Search reciters or surahs

## 📱 Contact & Support

- **WhatsApp Channel**: [Join Channel]([https://whatsapp.com/channel/y](https://www.whatsapp.com/channel/0029VasizxI47XeE2iiave0u))
- **Telegram**: [@cloudkudev](https://t.me/cloudkudev)
- **WhatsApp Chat**: [Direct Chat](https://wa.me/6287831816747)

## 🤝 Contributing

1. Fork this repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## ⭐ Show Your Support

If this project helps you, please give it a ⭐ star!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**© 2025 AlfiDev**

Built with ❤️ for the Muslim community

---

**Documentation**: [cloudku.us.kg](https://cloudku.us.kg) | **Support**: [WhatsApp](https://wa.me/6287831816747)
