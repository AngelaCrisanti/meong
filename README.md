#Meong

Meong adalah aplikasi jejaring sosial untuk kamu yang suka ngoding bareng sama temen-temen kamu.

##Catatan Pengembang
Meong lagi dalam tahap pengembangan, selagi front-end / REST API dari QuickTide sedang dibangun.
QuickTide adalah front-end dari Git Server yang dikembangin sama PT. Sagara Xinix Solusitama.
Tapi itu semua nggak menghalangi kamu yang pengen berkontribusi di sini. Kamu bisa baca TODO.txt
untuk mengetahui apa aja yang bisa kamu buat.

##Cara Jalanin Server
- Fork Meong
- Pull kode Meong ke sistem lokal kamu (hasil fork dari upstream master)

```
    git clone [repositori-meong-punya-kamu]
```
- Pastiin kamu udah punya [Node.JS](http://nodejs.org/) di sistem kamu
- Pindah ke direktori Meong (command line interface)

```
    cd /path/to/meong
```
- Install Dependency

```
    npm install
    sudo npm install supervisor -g
```
- Jalanin server Meong

```
    npm start
```
- Server Meong jalan di:
```
    http://localhost:3000
```

##Cara Berkontribusi
- Fork Meong
- Buat sesuatu di local code kamu
- Buat pull request
- Owner bakal check code kamu, kalo diterima, silakan pull rebase dari upstream master

```
    git pull --rebase upstream master
```
