 🧩 SDP Fullstack Challenge

Bu depo, **Yazılım Gerçekleştirme ve Test** dersi kapsamında geliştirilen tam kapsamlı bir **Full-Stack Otomasyon Projesi**dir.  
Proje; **Ruby on Rails 8 (API-only)** backend, **React + Vite (Lovable UI)** frontend ve **Cypress + Cucumber + Newman** tabanlı test otomasyon yapısını bir araya getirir.  
Amaç; uçtan uca (E2E) test süreçlerinin hem görsel hem işlevsel olarak doğrulanmasıdır.

---

 🚀 Proje Özeti

**SDP Fullstack Challenge**, backend ve frontend test altyapılarını tek bir proje çatısında birleştirmek amacıyla tasarlandı.  
Bu sayede hem **API yanıtlarının tutarlılığı** hem de **kullanıcı arayüzü davranışları** otomatik olarak doğrulanır.

### 🎯 Temel Hedefler
- Backend API ve frontend UI tutarlılığını test etmek  
- Manuel test senaryolarını otomatikleştirip yeniden üretilebilir hale getirmek  
- Test çıktılarının video ve HTML raporlarını oluşturmak  
- CI/CD süreçlerine entegre edilebilir bir otomasyon altyapısı sunmak  

---

 🧰 Teknoloji Yığını

| Kategori | Teknoloji |
|-----------|------------|
| **Backend** | Ruby on Rails 8 (API-only) |
| **Frontend** | React + Vite + Lovable UI + Shadcn UI + Tailwind CSS |
| **Test Araçları** | Postman / Newman / Cypress + Cucumber |
| **Programlama Dili** | TypeScript / JavaScript / Ruby |
| **Versiyon Kontrol** | Git + GitHub (main branch) |

---
 ⚙️ Kurulum ve Çalıştırma
 
 1️⃣ Depoyu Klonla
```bash
git clone https://github.com/elcinx/SDP-Fullstack-Challenge.git
cd SDP-Fullstack-Challenge

2️⃣ Backend Kurulumu
bash
Copy code
cd backend
bundle install
rails s

3️⃣ Frontend Kurulumu
bash
Copy code
cd ../frontend/lovable-ui
npm install
npm run dev

4️⃣ API Testlerini Çalıştır (Postman / Newman)
bash
Copy code
npx newman run products_api_collection.json -e products_env.json \
  -r cli,html,json \
  --reporter-html-export products_report.html \
  --reporter-json-export products_report.json

5️⃣ E2E Testlerini Çalıştır (Cypress)
Cypress Arayüzü (GUI) ile:
bash
Copy code
npm run cy
Headless (CI Modunda):
bash
Copy code
npm run cy:run

🎬 Demo Videosu
Bu kısa demo, SDP Otomasyon Frameworkü içinde gerçekleştirilen ilk uçtan uca test senaryosunu göstermektedir.
Senaryoda hem pozitif (happy path) hem de negatif test yolları yürütülmektedir.

🎥 YouTube’da İzle:
▶️ https://youtu.be/CqdV2kAjrVU

👩‍💻 Proje Ekibi
Geliştirici: Elçin Erdemir
Eğitmenler: Nurettin Şenyer, Ömer Durmuş
🔗 LinkedIn: https://tr.linkedin.com/in/elçin-erdemir-315a27306
