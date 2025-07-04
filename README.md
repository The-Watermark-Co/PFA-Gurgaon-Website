
# 🐾 PFA Gurugram NGO Website – Developer Git Workflow Guide

Welcome to the official **PFA Gurugram NGO Website Repository**!  
This guide outlines the **Git workflow** that all contributors must follow to ensure clean and collaborative development.

---

## 🌱 Core Workflow Principles:
✅ Developers **work on feature branches** only  
✅ **Pull Requests (PRs)** must target the `development` branch  
🚫 **No direct pushes** allowed to `main` or `development`  
🔒 Only the **Lead Developer** or Maintainer merges `development` into `main`  

---

## 📌 1. Setting Up Your Local Development Environment

### 🔹 Clone the Repository
```bash
git clone <repo-url>
cd <repo-folder>
```

### 🔹 Checkout the Development Branch
```bash
git checkout development
git pull origin development
```

---

## 📌 2. Git Hook to Prevent Unsafe Pushes

To avoid **accidental pushes** to protected branches:

### 🔹 Run Hook Setup Script (One-Time)
Make sure you're on `development` branch first, then:

```bash
bash setup-hooks.sh
```

### 🔹 Manual Hook Setup (If Needed)

#### 💻 For Linux/Mac or Windows Git Bash
```bash
cp .githooks/pre-push .git/hooks/pre-push
chmod +x .git/hooks/pre-push
```

---

## 📌 3. Create a New Feature Branch

Each feature, fix, or enhancement should be built on a **separate branch**:

```bash
git checkout -b feature/your-feature-name
```

💡 **Example:**
```bash
git checkout -b feature/donation-form-ui
```

---

## 📌 4. Code & Commit Your Changes

### 🔹 View Changes
```bash
git status
```

### 🔹 Stage Files
```bash
git add .
```

### 🔹 Commit with a Descriptive Message
```bash
git commit -m "Add UI for donation form"
```

---

## 📌 5. Push Your Feature Branch

```bash
git push origin feature/your-feature-name
```

💡 **Example:**
```bash
git push origin feature/donation-form-ui
```

---

## 📌 6. Submit a Pull Request (PR)

Once pushed, create a **PR into `development`**:

### 🔹 PR Submission Steps
1. Go to the PFA Gurugram GitHub repository  
2. Navigate to **Pull Requests → New Pull Request**  
3. Set:
   - **Base Branch:** `development`  
   - **Compare Branch:** `feature/your-feature-name`  
4. Add a clear **title** and **description**  
5. Assign a **reviewer from the Dev Team**  
6. Click **Create Pull Request**

---

## 📌 7. What Happens Next?

1️⃣ Your PR will be reviewed by a team member  
2️⃣ If approved, it will be merged into `development`  
3️⃣ Once tested and stable, the **Lead Developer** will merge into `main`  
4️⃣ ✅ `main` is then deployed to the **production server for PFA Gurugram** 🐾

---

## 📌 8. 🚨 Important Workflow Rules

✅ Always pull latest changes from `development` into your feature branch before pushing:  
```bash
git checkout feature/your-feature-name
git pull origin development
```

🚫 **DO NOT push directly to `main` or `development`**

✅ **Work ONLY on feature branches**

🧪 **Code must be reviewed before it goes live**

🚀 **Only the Lead Developer can merge `development` into `main`**

---

## 💚 Thank You for Supporting PFA Gurugram!

Your contributions help build a stronger digital presence for the voiceless.  
**Happy coding and compassion-driven development!** 🙌🐶🐱
