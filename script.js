body {
  margin: 0;
  font-family: Inter, sans-serif;
  background: #0e1116;
  color: white;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

/* NAV */
.nav {
  position: fixed;
  width: 100%;
  background: rgba(0,0,0,0.7);
  padding: 15px 0;
  z-index: 10;
}

.nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo span {
  color: #d4a24c;
}

.nav-links a {
  color: white;
  margin-left: 15px;
  text-decoration: none;
}

.btn {
  background: #d4a24c;
  padding: 8px 12px;
  border-radius: 4px;
  color: black !important;
}

/* HERO */
.hero {
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c") center/cover;
  display: flex;
  align-items: center;
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
}

.hero-content {
  position: relative;
  margin-left: 8%;
  max-width: 600px;
}

.hero h1 {
  font-size: 48px;
}

.hero-buttons {
  margin-top: 20px;
}

.btn-primary {
  background: #d4a24c;
  padding: 12px 18px;
  color: black;
  text-decoration: none;
  margin-right: 10px;
}

.btn-outline {
  border: 1px solid #d4a24c;
  padding: 12px 18px;
  color: #d4a24c;
  text-decoration: none;
}

/* SECTIONS */
.section {
  padding: 80px 0;
}

.dark {
  background: #141922;
}

.title {
  text-align: center;
  margin-bottom: 40px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background: rgba(255,255,255,0.05);
  padding: 20px;
  border-radius: 10px;
}

/* WORK */
.work-card {
  height: 200px;
  background: #222;
  border-radius: 10px;
}

/* ABOUT */
.split {
  display: flex;
  gap: 40px;
}

.highlight {
  background: rgba(255,255,255,0.05);
  padding: 20px;
  border-radius: 10px;
}

/* FORM */
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form input, .form textarea {
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.form button {
  background: #d4a24c;
  padding: 12px;
  border: none;
  font-weight: bold;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 20px;
  background: black;
    }
