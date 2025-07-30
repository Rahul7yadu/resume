# 🛠 How I Switched Frappe's PDF Engine from `wkhtmltopdf` to `WeasyPrint`

---

## 📌 Overview

Frappe uses `wkhtmltopdf` by default to generate PDFs. While it works for most basic use cases, it falls short in rendering modern CSS (like Flexbox and Grid), and sometimes has trouble with custom fonts or layouts.

In this blog, I’ll show how I replaced it with **WeasyPrint**—a modern, standards-compliant alternative that supports better CSS rendering and generates clean PDFs.

---

## How To Install and Setup

### Frappe Weasy

weasy print for print formats

### Installation

You can install this app using the [bench](https://github.com/frappe/bench) CLI:

```bash
cd $PATH_TO_YOUR_BENCH
bench get-app $URL_OF_THIS_REPO --branch develop
bench install-app frappe_weasy
```

## System Dependencies for WeasyPrint

WeasyPrint requires several system libraries. Before installing Python requirements, make sure to run:

**Ubuntu/Debian:**

```sh
sudo apt-get install libpangocairo-1.0-0 libpangoft2-1.0-0 libcairo2 libgdk-pixbuf2.0-0 libffi-dev shared-mime-info
```

**Fedora/RedHat:**

```sh
sudo dnf install cairo pango gdk-pixbuf2 libffi shared-mime-info
```

For other platforms, see [WeasyPrint Installation Guide](https://weasyprint.readthedocs.io/en/stable/install.html).

Then, install Python requirements:

```sh
pip install -r requirements.txt
```

### Contributing

This app uses `pre-commit` for code formatting and linting. Please [install pre-commit](https://pre-commit.com/#installation) and enable it for this repository:

```bash
cd apps/frappe_weasy
pre-commit install
```

Pre-commit is configured to use the following tools for checking and formatting your code:

- ruff
- eslint
- prettier
- pyupgrade

### License

unlicense

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
