# 🛠 How I Switched Frappe's PDF Engine from `wkhtmltopdf` to `WeasyPrint`

---

## 📌 Overview

Frappe uses **wkhtmltopdf** by default to generate PDFs. While it works for most basic use cases, it falls short in rendering modern CSS (like Flexbox and Grid), and sometimes has trouble with custom fonts or layouts.

In this blog, I’ll show how I replaced it with **WeasyPrint**—a modern, standards-compliant alternative that supports better CSS rendering and generates clean PDFs.

---

### Installation

To Read how to install this app refer [README](https://github.com/Rahul7yadu/frappe_weasy)

## 📂 Project Structure

Here's the step-by-step process I followed:

1. 🔧 Create a new Frappe app
2. 📦 Install and configure WeasyPrint
3. 🧠 Override Frappe's PDF engine
4. ⚙️ Add dependency management
5. 🧪 Test and compare output
6. 🚀 Package for reusability

---

## 🔧 Step 1: Create the Frappe App

Create your custom app using the Frappe CLI:

```bash
bench new-app frappe_weasy
bench get-app frappe_weasy
bench --site your-site-name install-app frappe_weasy
```
