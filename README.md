# 🚀 Resume Maker Website Development Workflow Guide

Welcome to this REPOSITORY! This guide explains the **Git workflow** that every developer must follow to maintain a structured development process.  

**Key Workflow Rules:**
✅ Developers work on separate feature branches  
✅ PRs must be created for merging into `development`  
✅ 🚫 No direct pushes to `main` or `development`  
✅ Only the **Lead Developer** can merge `development` into `main`  

---

## **📌 1. Setting Up Your Local Repository**
Before you start coding, set up your local development environment.

### **🔹 Clone the Repository**
Open your terminal and run:

```bash
git clone <repo-url>
cd <repo-name>
```

### **🔹 Switch to the Development Branch**
```bash
git checkout development
git pull origin development
```
## **📌 2. Setting Up Pre-Push Git Hooks  - Again Switch first to Development Branch before running this script**
To **prevent accidental direct pushes** to `main` and `development`, developers must set up Git hooks.

### **🔹 Install Pre-Push Hook (One-Time Setup)**
Run this command **once** after cloning the repo:

```bash
bash setup-hooks.sh
```

### **🔹 Manually Installing the Hook (If Needed)**
If the script doesn't work, install it manually.

#### **💻 For Mac & Linux**
```bash
cp .githooks/pre-push .git/hooks/pre-push
chmod +x .git/hooks/pre-push
```

#### **🖥️ For Windows (Git Bash / WSL)**
```bash
cp .githooks/pre-push .git/hooks/pre-push
chmod +x .git/hooks/pre-push
```

---

## **📌 3. Creating a New Feature Branch**
Every new feature or bug fix should be done on a **separate branch**.

### **🔹 Create a New Feature Branch**
```bash
git checkout -b feature/your-feature-name
```

💡 **Example:**  
```bash
git checkout -b feature/seo-optimization
```

---

## **📌 4. Writing & Committing Your Code**
After making your changes, commit them:

### **🔹 Check Modified Files**
```bash
git status
```

### **🔹 Stage Files for Commit**
```bash
git add .
```

### **🔹 Commit with a Meaningful Message**
```bash
git commit -m "Added login authentication feature"
```

---

## **📌 5. Pushing Code to GitHub**
Once committed, push your branch to GitHub:

```bash
git push origin feature/your-feature-name
```

💡 **Example:**  
```bash
git push origin feature/seo-optimization
```

---

## **📌 6. Creating a Pull Request (PR)**
After pushing your code, **create a PR to merge into `development`**.

### **🔹 Steps to Submit a PR**
1. **Go to GitHub Repository**  
2. Click on **Pull Requests**  
3. Click **"New Pull Request"**  
4. **Base Branch:** `development`  
5. **Compare Branch:** `feature/your-feature-name`  
6. Click **"Create Pull Request"**  
7. Add a **title & description** explaining your changes  
8. Assign the **Lead Developer as a reviewer**  
9. Click **"Submit"**  

---



## **📌 7. What Happens After PR Submission?**
1️⃣ **Only Approved Member will reviews your PR**  
2️⃣ If approved, they **merge it into `development`**  
3️⃣ Once `development` is stable, the **team will merge it into `main`**  
4️⃣ ✅ `main` is deployed automatically to production 🚀  

---

## **📌 8. 🚨 Important Workflow Rules**
✅ **Do not forget to take pull from development-branch in your feature-branch before pushing your code**
🚫 **DO NOT push code directly to `main` or `development`.**  
✅ **ALWAYS create a feature branch for your work.**  
🔍 **PRs must be reviewed before merging.**  
🚀 **Only the DCOIL Tech Team can merge `development` into `main`.**  

---

## **🎯 You're Now Ready to Contribute! Happy Coding! 🚀**

