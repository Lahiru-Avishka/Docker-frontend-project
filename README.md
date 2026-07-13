# Dockerized React Vite Application 🚀

A modern React frontend application built with **Vite** and containerized using **Docker**.

This project demonstrates frontend development, Docker containerization, and environment configuration for deployment-ready applications.

---

## 📌 Features

- React 19
- Vite
- Hot Module Replacement (HMR)
- Dockerized Development Environment
- Environment Variable Support
- Responsive UI

---

## 🛠 Technologies

- React
- Vite
- Docker
- JavaScript (ES6+)
- HTML5
- CSS3

---

## Project Structure

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── Dockerfile
├── package.json
├── vite.config.js
├── README.md
└── .dockerignore
```

---

## Clone Repository

```bash
git clone https://github.com/Lahiru-Avishka/Docker-frontend-project.git

cd dockerized-react-vite-app
```

---

## Run Without Docker

Install packages

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

## Run Using Docker

Build Image

```bash
docker build -t react-app .
```

Run Container

```bash
docker run \
--name react-container \
-p 3000:5173 \
-v /app/node_modules \
-v ${PWD}:/app \
-e CHOKIDAR_USEPOLLING=true \
react-app
```

Open

```
http://localhost:3000
```

---

## Docker Commands

Build

```bash
docker build -t react-app .
```

List Images

```bash
docker images
```

Run

```bash
docker run -p 3000:5173 react-app
```

Stop

```bash
docker stop react-container
```

Remove

```bash
docker rm react-container
```

---

## Learning Outcomes

- Docker fundamentals
- Building Docker images
- Running containers
- Port mapping
- Volume mounting
- Environment variables
- React development inside Docker

---

## Future Improvements

- Docker Compose
- Nginx Production Build
- GitHub Actions CI/CD
- Deploy to AWS EC2
- Deploy to ECS
- Kubernetes Deployment

---

## Author

**Lahiru Avishka Madhusanka**

DevOps & Cloud Computing Enthusiast

- Docker
- Kubernetes
- AWS
- Linux
- CI/CD

⭐ Feel free to fork and star this repository.
