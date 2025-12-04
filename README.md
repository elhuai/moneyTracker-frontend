# 💰 金金計較 Money Tracker

[English](#english) | [中文](#中文)

---

## English

### 📖 Overview

**金金計較** (Money Tracker) is a personal expense tracking web application designed for managing your "secret savings" - those off-the-record expenses and income that don't need receipts. With a playful and intuitive interface, it helps you track your spending, set budgets, and manage your personal finances.

### ✨ Features

- **🌐 Bilingual Support**: Switch between Traditional Chinese and English with one click
  - Language preference saved automatically
  - Real-time interface updates
- **User Authentication**: Secure login system with JWT token authentication
- **Dashboard Overview**: 
  - Monthly income and expense summary
  - Budget tracking with visual progress bar
  - Remaining budget calculation
- **Transaction Management**:
  - Add income and expense entries
  - Edit and delete transactions
  - Categorize transactions with custom categories
  - Add notes to each transaction
- **Category Management**:
  - Create custom categories with emoji icons
  - Color-coded categories for easy identification
  - Separate income and expense categories
- **Budget Control**:
  - Set monthly spending budgets
  - Real-time budget remaining display
  - Visual progress indicators
- **Responsive Design**: Mobile-first design optimized for all devices

### 🛠 Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables
- **UI Components**: SweetAlert2 for beautiful modals
- **Fonts**: Google Fonts (Varela Round, Zen Maru Gothic)
- **Storage**: LocalStorage for token persistence
- **API Communication**: Fetch API with custom wrapper

### 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Backend API server running (see backend repository)
- Node.js backend server accessible at `http://localhost:3000` (configurable in `config.js`)

### 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/elhuai/moneyTracker-frontend.git
   cd moneyTracker-frontend
   ```

2. **Configure API endpoint**
   
   Edit `config.js` to point to your backend server:
   ```javascript
   const CONFIG = {
     API_BASE_URL: "http://localhost:3000",
   };
   ```

3. **Start the application**
   
   You can use any static file server. For example:
   
   - **Using Python**:
     ```bash
     python -m http.server 8000
     ```
   
   - **Using Node.js http-server**:
     ```bash
     npx http-server -p 8000
     ```
   
   - **Using VS Code Live Server**: Right-click on `index.html` and select "Open with Live Server"

4. **Access the application**
   
   Open your browser and navigate to `http://localhost:8000`

### 🎯 Usage

1. **First Time Setup**:
   - Click "開啟小金庫" (Open Vault) on the landing page
   - Login with your credentials
   - The backend will need to be set up with a user account first

2. **Adding Transactions**:
   - Click "記一筆" (Add Entry) button
   - Select transaction type (Income/Expense)
   - Choose a category
   - Enter amount and optional note
   - Select date
   - Submit

3. **Managing Categories**:
   - Click "分類管理" (Manage Categories)
   - Create new categories with emoji icons and colors
   - Edit or delete existing categories

4. **Setting Budget**:
   - Click on the budget section
   - Enter your monthly spending limit
   - Track your spending against the budget in real-time

### 📁 Project Structure

```
moneyTracker-frontend/
├── index.html          # Main HTML file with app structure
├── app.js              # Core application logic and API calls
├── i18n.js             # Internationalization and translation functions
├── config.js           # API configuration
├── style.css           # Complete styling and animations
├── icon.png            # App icon/logo
└── README.md           # This file
```

### 🎨 Design Features

- **Soft Color Palette**: Gentle green and beige tones for a relaxing user experience
- **Emoji Icons**: Playful emoji-based category icons
- **Smooth Animations**: Fade-in effects and smooth transitions
- **Mobile-First**: Optimized for mobile devices with touch-friendly interfaces
- **Visual Feedback**: Progress bars, color-coded amounts, and clear status indicators

### 🔧 Configuration

The main configuration file is `config.js`:

```javascript
const CONFIG = {
  API_BASE_URL: "http://localhost:3000",  // Change this to your backend URL
};
```
### 🌐 Language Support

The app supports **bilingual switching** between Traditional Chinese (繁體中文) and English:

- **Switch Language**: Click the language toggle button in the top-right corner
- **Default Language**: Traditional Chinese (可在初次載入時根據瀏覽器語言自動選擇)
- **Auto-Save**: Language preference is saved in browser localStorage
- **Coverage**: All UI elements, forms, dialogs, and messages

#### Supported Languages
- 🇹🇼 **繁體中文** (Traditional Chinese) - Default
- 🇺🇸 **English**

#### Adding New Translations

To add new translation strings, edit `i18n.js`:

```javascript
const translations = {
  zh: {
    yourKey: "你的中文文字",
  },
  en: {
    yourKey: "Your English text",
  }
};
```

Then use `t("yourKey")` in your code or add `data-i18n="yourKey"` to HTML elements.

### 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Android Chrome 90+

### 📝 License

MIT
MIT

---

## 中文

### 📖 專案簡介

**金金計較**是一個個人記帳 Web 應用程式，專為管理您的「私房錢」而設計 - 那些不需要發票的帳外收支。透過有趣直觀的介面，幫助您追蹤支出、設定預算並管理個人財務。

### ✨ 主要功能

- **🌐 雙語支援**：一鍵切換繁體中文與英文
  - 自動儲存語言偏好
  - 即時更新介面
- **使用者驗證**：採用 JWT token 的安全登入系統
- **儀表板總覽**：
  - 每月收支摘要
  - 預算追蹤與視覺化進度條
  - 剩餘預算計算
- **交易管理**：
  - 新增收入與支出記錄
  - 編輯與刪除交易
  - 使用自訂分類為交易分類
  - 為每筆交易新增備註
- **分類管理**：
  - 使用表情符號圖示建立自訂分類
  - 色彩編碼分類，便於識別
  - 區分收入與支出分類
- **預算控制**：
  - 設定每月支出預算
  - 即時顯示剩餘預算
  - 視覺化進度指示器
- **響應式設計**：行動優先設計，適用於所有裝置

### 🛠 技術堆疊

- **前端**：純 JavaScript (ES6+)
- **樣式**：自訂 CSS 與 CSS 變數
- **UI 元件**：SweetAlert2 美化彈出視窗
- **字型**：Google Fonts (Varela Round, Zen Maru Gothic)
- **儲存**：LocalStorage 持久化 token
- **API 通訊**：Fetch API 與自訂包裝器

### 📋 前置需求

- 現代網頁瀏覽器（Chrome、Firefox、Safari、Edge）
- 後端 API 伺服器運行中（請參考後端專案）
- Node.js 後端伺服器可於 `http://localhost:3000` 存取（可在 `config.js` 設定）

### 🚀 快速開始

1. **複製專案**
   ```bash
   git clone https://github.com/elhuai/moneyTracker-frontend.git
   cd moneyTracker-frontend
   ```

2. **設定 API 端點**
   
   編輯 `config.js` 指向您的後端伺服器：
   ```javascript
   const CONFIG = {
     API_BASE_URL: "http://localhost:3000",
   };
   ```

3. **啟動應用程式**
   
   您可以使用任何靜態檔案伺服器。例如：
   
   - **使用 Python**：
     ```bash
     python -m http.server 8000
     ```
   
   - **使用 Node.js http-server**：
     ```bash
     npx http-server -p 8000
     ```
   
   - **使用 VS Code Live Server**：在 `index.html` 上按右鍵並選擇「Open with Live Server」

4. **存取應用程式**
   
   開啟瀏覽器並前往 `http://localhost:8000`

### 🎯 使用方式

1. **首次設定**：
   - 在歡迎頁面點擊「開啟小金庫」
   - 使用您的帳號密碼登入
   - 需先在後端設定使用者帳戶

2. **新增交易**：
   - 點擊「記一筆」按鈕
   - 選擇交易類型（收入/支出）
   - 選擇分類
   - 輸入金額與選填備註
   - 選擇日期
   - 送出

3. **管理分類**：
   - 點擊「分類管理」
   - 使用表情符號圖示和顏色建立新分類
   - 編輯或刪除現有分類

4. **設定預算**：
   - 點擊預算區域
### 📁 專案結構

```
moneyTracker-frontend/
├── index.html          # 主要 HTML 檔案與應用程式結構
├── app.js              # 核心應用程式邏輯與 API 呼叫
├── i18n.js             # 國際化與翻譯功能
├── config.js           # API 設定
├── style.css           # 完整樣式與動畫
├── icon.png            # 應用程式圖示
└── README.md           # 本檔案
``` style.css           # 完整樣式與動畫
├── icon.png            # 應用程式圖示
└── README.md           # 本檔案
```

### 🎨 設計特色

- **柔和色調**：使用溫和的綠色與米色調，提供放鬆的使用體驗
- **表情符號圖示**：有趣的表情符號分類圖示
- **流暢動畫**：淡入效果與平滑轉場
- **行動優先**：針對行動裝置優化，觸控友善介面
- **視覺回饋**：進度條、色彩編碼金額與清晰的狀態指示器

### 🔧 設定

主要設定檔為 `config.js`：

```javascript
const CONFIG = {
  API_BASE_URL: "http://localhost:3000",  // 修改為您的後端網址
};
```

### 🌐 語言支援

本應用程式支援**中英文雙語切換**：

- **切換語言**：點擊右上角的語言切換按鈕
- **預設語言**：繁體中文（可根據瀏覽器語言自動選擇）
- **自動儲存**：語言偏好儲存於瀏覽器 localStorage
- **涵蓋範圍**：所有 UI 元素、表單、對話框與訊息

#### 支援的語言
- 🇹🇼 **繁體中文** - 預設
- 🇺🇸 **English**

#### 新增翻譯

要新增新的翻譯文字，請編輯 `i18n.js`：

```javascript
const translations = {
  zh: {
    yourKey: "你的中文文字",
  },
  en: {
    yourKey: "Your English text",
  }
};
```

然後在程式碼中使用 `t("yourKey")`，或在 HTML 元素中加入 `data-i18n="yourKey"` 屬性。

### 🌐 瀏覽器支援

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Android Chrome 90+

---

**Made with 💚 for managing your secret savings!**  
**用 💚 為您的私房錢打造！**
