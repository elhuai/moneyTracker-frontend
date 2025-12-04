// ===== 多語言翻譯 =====
const translations = {
  zh: {
    // Landing Page
    appTitle: "金金計較",
    appSubtitle: "私房錢記帳助手",
    landingTagline: "噓...這裡沒有發票，<br>只有快樂與夢想！",
    openVault: "開啟小金庫",
    
    // Login Page
    vaultLogin: "金庫登入",
    username: "使用者名稱",
    password: "通關密碼",
    usernamePlaceholder: "請輸入帳號",
    passwordPlaceholder: "請輸入密碼",
    unlockVault: "解鎖金庫",
    
    // Header
    vaultOpen: "小金庫已開",
    logout: "登出",
    
    // Dashboard
    budgetRemaining: "本月還能花",
    totalBudget: "總預算",
    monthlyIncome: "本月收入",
    monthlyExpense: "本月支出",
    
    // Actions
    addEntry: "記一筆",
    manageCategories: "管理分類",
    
    // Transaction List
    monthTransactions: "月收支",
    noTransactions: "🍃 這裡空空的，還沒有紀錄喔！",
    
    // Transaction Form
    date: "日期",
    type: "收支",
    expense: "支出",
    income: "收入",
    category: "類別",
    amount: "金額",
    amountPlaceholder: "多少錢？",
    note: "備註",
    notePlaceholder: "例如：買卡片、聚餐",
    submit: "記帳！",
    cancel: "取消",
    
    // Category Management
    manageCategoriesTitle: "分類管理",
    addCategory: "新增分類",
    categoryName: "分類名稱",
    categoryNamePlaceholder: "名稱",
    categoryIcon: "圖示",
    categoryIconPlaceholder: "單一 Emoji",
    categoryColor: "顏色",
    categoryType: "類型",
    uncategorized: "未分類",
    cannotDelete: "無法刪除",
    existingCategories: "現有類別 (點擊可編輯)",
    editCategory: "編輯類別",
    close: "關閉",
    adding: "新增中...",
    creating: "正在建立類別",
    updating: "更新中...",
    updatingCategory: "正在更新類別",
    
    // Budget
    setBudget: "設定預算",
    budgetAmount: "每月預算",
    budgetPlaceholder: "輸入金額",
    
    // Messages
    loginSuccess: "登入成功！",
    loginFailed: "登入失敗",
    logoutConfirm: "確定要登出嗎？",
    yes: "是",
    no: "否",
    addSuccess: "新增成功！",
    updateSuccess: "更新成功！",
    deleteSuccess: "刪除成功！",
    deleteConfirm: "確定要刪除嗎？",
    error: "錯誤",
    success: "成功",
    
    // Edit/Delete
    edit: "編輯",
    delete: "刪除",
    save: "儲存",
    
    // Errors
    requestFailed: "請求失敗",
    fillRequired: "請填寫所有必填欄位",
    invalidAmount: "請輸入有效金額",
  },
  
  en: {
    // Landing Page
    appTitle: "Money Tracker",
    appSubtitle: "Secret Savings Assistant",
    landingTagline: "Shh... No receipts here,<br>just happiness & dreams!",
    openVault: "Open Vault",
    
    // Login Page
    vaultLogin: "Vault Login",
    username: "Username",
    password: "Password",
    usernamePlaceholder: "Enter username",
    passwordPlaceholder: "Enter password",
    unlockVault: "Unlock Vault",
    
    // Header
    vaultOpen: "Vault Opened",
    logout: "Logout",
    
    // Dashboard
    budgetRemaining: "Budget Remaining",
    totalBudget: "Total Budget",
    monthlyIncome: "Monthly Income",
    monthlyExpense: "Monthly Expense",
    
    // Actions
    addEntry: "Add Entry",
    manageCategories: "Manage Categories",
    
    // Transaction List
    monthTransactions: "Transactions",
    noTransactions: "🍃 No transactions yet!",
    
    // Transaction Form
    date: "Date",
    type: "Type",
    expense: "Expense",
    income: "Income",
    category: "Category",
    // Category Management
    manageCategoriesTitle: "Manage Categories",
    addCategory: "Add Category",
    categoryName: "Category Name",
    categoryNamePlaceholder: "Name",
    categoryIcon: "Icon",
    categoryIconPlaceholder: "Single Emoji",
    categoryColor: "Color",
    categoryType: "Type",
    uncategorized: "Uncategorized",
    cannotDelete: "Cannot Delete",
    existingCategories: "Existing Categories (Click to edit)",
    editCategory: "Edit Category",
    close: "Close",
    adding: "Adding...",
    creating: "Creating category",
    updating: "Updating...",
    updatingCategory: "Updating category",
    categoryNamePlaceholder: "e.g., Food, Transport",
    categoryIcon: "Icon",
    categoryIconPlaceholder: "Single Emoji",
    categoryColor: "Color",
    categoryType: "Type",
    uncategorized: "Uncategorized",
    cannotDelete: "Cannot Delete",
    
    // Budget
    setBudget: "Set Budget",
    budgetAmount: "Monthly Budget",
    budgetPlaceholder: "Enter amount",
    
    // Messages
    loginSuccess: "Login successful!",
    loginFailed: "Login failed",
    logoutConfirm: "Are you sure you want to logout?",
    yes: "Yes",
    no: "No",
    addSuccess: "Added successfully!",
    updateSuccess: "Updated successfully!",
    deleteSuccess: "Deleted successfully!",
    deleteConfirm: "Are you sure you want to delete?",
    error: "Error",
    success: "Success",
    
    // Edit/Delete
    edit: "Edit",
    delete: "Delete",
    save: "Save",
    
    // Errors
    requestFailed: "Request failed",
    fillRequired: "Please fill all required fields",
    invalidAmount: "Please enter a valid amount",
  }
};

// ===== 語言管理 =====
let currentLang = localStorage.getItem("lang") || "zh";

function t(key) {
  return translations[currentLang]?.[key] || translations.zh[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  updatePageLanguage();
}

function updatePageLanguage() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      if (el.hasAttribute("placeholder")) {
        el.placeholder = t(key);
      } else {
        el.value = t(key);
      }
    } else {
      el.innerHTML = t(key);
    }
  });
  
  // Update document title
  document.title = t("appTitle");
  
  // Update HTML lang attribute
  document.documentElement.lang = currentLang === "zh" ? "zh-TW" : "en";
  
  // Update language toggle button
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = currentLang === "zh" ? "EN" : "中";
  }
}

function toggleLanguage() {
  setLanguage(currentLang === "zh" ? "en" : "zh");
  
  // Re-render transactions and summary if on main page
  if (!mainSection.classList.contains("hidden")) {
    renderTransactions();
    updateSummary();
  }
}
