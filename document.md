---

**Dark Crystal — Gameplay + Building Implementation (Revisi dengan Gameplay Flow)**

---

**Konsep Inti**

Dokumen ini tetap mempertahankan isi building implementation yang sudah ada, lalu menambahkan **gameplay implementation** sebagai lapisan penjelas supaya Anda bisa melihat bagaimana map, role, event, dan flow ronde saling bekerja. Jadi fokusnya sekarang bukan hanya “bangunan seperti apa yang dibutuhkan,” tetapi juga “kenapa bangunan itu dibutuhkan berdasarkan jalannya ronde Dark Crystal.” 

---

**Hubungan Gameplay dan Building**

Building implementation untuk Dark Crystal harus selalu diturunkan dari pertanyaan gameplay ini: **apakah ruang ini membantu kabur, mengejar, memotong rotasi, atau menciptakan momen final chase?** Kalau sebuah bangunan hanya terlihat bagus tetapi tidak memberi keputusan gerak yang jelas, maka bangunan itu tidak benar-benar membantu mode ini.

Karena itu, tiga bangunan utama, dua alley, empat street, dan rooftop layer harus dibangun sebagai **jaringan keputusan cepat**, bukan area eksplorasi panjang. Pemain harus terus merasa punya pilihan rute, tetapi pilihan itu tetap terbaca dalam beberapa detik. Ini sejalan dengan brief yang meminta map medium-sized, tanpa dead end, dengan vertical play dan rooftop access yang aktif. 

---

**Gameplay Implementation — Cara Ronde Berjalan**

Gameplay Dark Crystal pada dasarnya adalah **loop conversion chase**. Satu pemain dipilih menjadi **Crystal Bearer**, lalu ia memburu Survivor. Setiap Survivor yang terkena akan ikut berubah menjadi Bearer sampai tersisa satu pemain terakhir yang masih uncorrupted. Karena itu, seluruh sistem game harus dibangun sebagai **alur state yang rapi**: ready phase, bearer assignment, countdown, combat phase, survivor check, winner resolution, lalu auto-reset.

Secara implementasi, mode ini harus terasa seperti **tekanan yang terus naik**. Awal ronde hanya ada satu ancaman. Setelah conversion pertama, ancaman bertambah. Setelah conversion kedua dan ketiga, seluruh map terasa lebih sempit walaupun ukuran map tidak berubah. Inilah inti kenapa gameplay Dark Crystal sangat bergantung pada flow dan feedback, bukan hanya layout.

**Urutan Gameplay Inti**

**1. Spawn Hub / Waiting Phase**

Semua pemain mulai di Spawn Hub. Pada fase ini, belum ada Bearer dan belum ada Survivor aktif. Sistem hanya membaca:

* siapa pemain yang aktif,
* siapa yang sudah klik ready,
* apakah semua pemain sudah siap,
* apakah teacher override dipakai.

Gate tetap tertutup sampai syarat mulai ronde terpenuhi. Jadi Spawn Hub bukan hanya ruang tunggu, tetapi **state kontrol** sebelum match dimulai.

**2. Bearer Selection Phase**

Begitu ronde dimulai, satu pemain aktif dipilih secara acak menjadi **Crystal Bearer**. Pemain ini langsung menerima:

* `bearer` tag,
* `Crystal Blade`,
* `Speed II`,
* aura ungu,
* title announcement.

Semua pemain lain menerima `survivor` tag dan kit Survivor. Dari titik ini, seluruh map sudah punya pusat ancaman yang jelas.

**3. Countdown Phase**

Setelah role dibagikan, ada countdown 5 detik. Fungsi fase ini adalah memberi semua pemain waktu membaca situasi:

* siapa Bearer,
* ke mana harus lari,
* jalur mana yang mau dipakai dulu.

Countdown ini sangat penting karena kalau gate dibuka terlalu cepat, ronde terasa kacau; kalau terlalu lama, tempo jadi turun.

**4. Combat / Conversion Phase**

Setelah gate terbuka, Bearer masuk ke fase chase. Survivor menyebar ke street, alley, bangunan, dan rooftop. Saat Bearer mengenai Survivor, Survivor itu langsung dikonversi menjadi Bearer baru. Di sinilah game berubah dari “one hunter vs many runners” menjadi “spreading corruption wave.”

Semua conversion harus terasa besar melalui:

* flash,
* boom sound,
* pergantian role,
* perubahan aura,
* update scoreboard conversion.

**5. Final Two / Last Survivor Phase**

Ketika jumlah Survivor tinggal 2, sistem memicu title **FINAL TWO**. Tujuannya adalah membuat akhir ronde terasa seperti momen klimaks, bukan sekadar sisa pemain berkurang. Ketika jumlah Survivor tinggal 1, sistem langsung memicu **LAST SURVIVOR**, menambah round win ke pemain itu, menjalankan fireworks, lalu masuk ke reset chain.

**6. Auto-Reset Phase**

Setelah ronde selesai, sistem harus:

* membersihkan semua item,
* menghapus tag `bearer`, `survivor`, dan `ready`,
* mem-teleport semua pemain ke Spawn Hub,
* mengosongkan scoreboard ronde,
* menunggu ready phase berikutnya.

Mode ini memang didesain supaya guru tidak perlu mengatur ronde manual setiap kali.

---

**Contoh Gameplay Flow — Satu Ronde Konkret**

**Contoh Implementasi:**

* Total pemain: **12**
* Semua masuk ke Spawn Hub
* **11** pemain klik ready, lalu guru memakai teacher override
* Sistem memilih **Alya** sebagai Bearer
* Alya menerima `Crystal Blade`, `Speed II`, aura ungu, dan title `YOU ARE THE BEARER`
* 11 pemain lain menerima `survivor` tag, `3 snowball`, dan `Speed I boots`
* Countdown berjalan **5 detik**
* Gate terbuka
* Pada detik ke-24, Alya mengonversi **Raka**
* `conversions[Alya]` naik dari **0 ke 1**
* `survivor_count` turun dari **11 ke 10**
* Pada menit ke-2:12, survivor count turun jadi **2**
* Title `FINAL TWO — Nara vs Dito!` muncul
* Pada menit ke-3:41, Nara tertangkap
* Dito menjadi `LAST SURVIVOR`
* `rounds_won[Dito]` naik **+1**
* Sistem memulai countdown reset **10 detik**
* Semua pemain dipindah kembali ke Spawn Hub

Contoh ini membantu melihat bahwa building bukan berdiri sendiri. West Ruin, East Ruin, alley, dan rooftop dipakai hanya karena ronde memang mendorong pemain untuk kabur, memotong rotasi, dan bertahan beberapa detik lebih lama.

---

**Role Logic — Bearer dan Survivor**

**Crystal Bearer — role ofensif utama**

Bearer adalah inti tekanan ronde. Role ini harus terasa jelas lebih kuat daripada Survivor. Bearer menerima:

* `Speed II`,
* `Crystal Blade`,
* aura corruption ungu,
* tag visual `BEARER`.

Tujuan desainnya bukan untuk duel seimbang, tetapi untuk menciptakan rasa bahwa Bearer adalah kekuatan yang terus menyebar di map.

**Survivor — role bertahan**

Survivor tidak didesain untuk mengalahkan Bearer. Mereka hanya punya alat untuk membeli waktu:

* `3 snowball` untuk slow singkat,
* `Speed I boots`,
* glow samar supaya sesama Survivor mudah dikenali.

Secara gameplay, ini berarti keputusan jalur lebih penting daripada skill combat biasa. Survivor menang bukan dengan menyerang balik, tetapi dengan tetap hidup paling lama.

**Power Curve Ronde**

Power curve Dark Crystal datang dari **jumlah Bearer yang terus bertambah**. Semakin lama ronde berjalan:

* map terasa makin sempit,
* rute aman makin sedikit,
* rooftop makin berisiko,
* alley makin tegang,
* Town Square makin berbahaya.

Jadi pacing game tidak datang dari perubahan map, tetapi dari perubahan komposisi role di dalam map.

---

**Struktur Bangunan Utama**

**Prinsip Dasar**

Tiga bangunan utama paling aman diimplementasikan sebagai **West Building / West Ruin**, **East Building / East Ruin**, dan **South Building / South Hall** yang mengelilingi Town Square dari tiga sisi. Spawn Hub tetap di utara. Susunan ini membuat aliran pemain dari hub ke arena terasa natural: keluar dari gate, lihat Town Square, lalu pilih belok ke kiri, kanan, atau dorong ke jalur selatan.

Setiap bangunan sebaiknya memiliki **2–3 lantai**, tetapi fokusnya harus pada **jalur vertikal yang cepat dibaca**, bukan interior rumit. Satu lantai dasar untuk rotasi dan cover, satu lantai atas untuk memotong jalur dan mengakses rooftop, lalu rooftop sebagai lapisan chase paling terbuka. 

**Aturan Struktur yang Wajib Dijaga**

* Tidak boleh ada dead end murni
* Setiap ruang utama minimal punya dua akses keluar
* Tangga harus terlihat jelas dari jalur masuk
* Rooftop minimal punya dua jalur turun yang berbeda
* Alley tidak boleh berakhir pada jebakan tanpa keluar
* Pencahayaan harus konsisten hangat, bukan gelap total

Ini penting karena dalam mode conversion, rasa “terjebak tanpa pilihan” akan terasa tidak adil, terutama untuk pemain usia 8–15 yang jadi target utama map ini. 

---

**Implementasi per Bangunan**

**West Building / West Ruin — bangunan rotasi cepat**

Bangunan barat paling cocok dijadikan bangunan dengan karakter **lebih rusak dan lebih terbuka**. Fungsinya adalah memberi Survivor jalur kabur cepat dari Town Square ke West Alley, lalu naik ke rooftop bila perlu. Karena sifatnya ruin, dinding bisa dibuat sebagian patah, ada jendela terbuka besar, dan beberapa potongan tembok setengah tinggi untuk cover sambil tetap menjaga sightline.

Lantai dasar bangunan ini sebaiknya punya:

* satu pintu utama ke Town Square
* satu akses samping ke West Street
* satu akses belakang ke West Alley
* satu tangga internal yang langsung terbaca dari ruang utama

Lantai atasnya tidak perlu banyak kamar. Lebih baik dibuat seperti balkon pecah atau koridor terbuka yang mengarah cepat ke rooftop. Tradeoff-nya, bangunan ini akan terasa lebih mudah ditembus Bearer, tetapi justru itu bagus untuk menjaga tempo ronde tetap agresif. 

**East Building / East Ruin — bangunan mirror dengan variasi**

Bangunan timur bisa menjadi pasangan visual dari bangunan barat, tetapi jangan dibuat copy-paste penuh. Secara gameplay, ia tetap harus punya tiga fungsi yang sama: akses dari square, akses ke alley, dan akses ke rooftop. Bedanya, bangunan timur bisa sedikit lebih sempit di dalam dan sedikit lebih tinggi secara siluet supaya pemain punya landmark kiri-kanan yang berbeda.

Implementasi aman untuk bangunan timur:

* pintu utama ke Town Square
* jalur samping ke East Street
* celah belakang ke East Alley
* tangga model berbeda dari bangunan barat
* rooftop parapet yang cukup lebar untuk sprint, bukan hanya dekorasi

Dengan begitu, kedua sisi arena terasa seimbang tetapi tidak monoton. 

**South Building / South Hall — bangunan jangkar endgame**

Bangunan selatan paling cocok menjadi bangunan yang **lebih utuh, lebih besar, dan lebih formal** dibanding dua ruin samping. Karena posisinya di selatan, ia berfungsi sebagai anchor zone: pemain yang lari terlalu jauh dari pusat map akan sering berakhir di sini, sehingga South Hall harus mampu menghasilkan momen final chase yang kuat.

Lantai dasar South Hall idealnya lebih terbuka seperti aula rusak dengan:

* satu akses utama dari South Street
* dua akses samping dari jalur kiri dan kanan
* satu tangga atau dua stair split menuju lantai atas
* jalur jelas ke rooftop selatan

Karena South Hall lebih besar, ia berpotensi terlalu aman bila dibuat terlalu tertutup. Jadi interiornya jangan terlalu padat dengan kamar. Gunakan ruang besar, pilar, balkon terbuka, dan railing rendah supaya Bearer tetap bisa membaca pergerakan target. 

---

**Rooftop Layer**

Rooftop di Dark Crystal bukan bonus area; ini adalah sistem gameplay penuh. Brief secara jelas meminta rooftop path yang saling terhubung dengan rope bridge, dan ini berarti rooftop harus dibangun cukup lebar untuk:

* sprint chase
* quick turn
* lompatan aman ke landing berikutnya
* pandangan ke Town Square dan main street

**Rooftop Access**

Minimal harus ada dua akses besar ke rooftop, satu per sisi district, tetapi implementasi terbaik untuk map ini adalah:

* West rooftop access dari West Ruin
* East rooftop access dari East Ruin
* South rooftop access dari South Hall

Jadi secara praktik ada tiga akses, walaupun syarat minimalnya dua. Ini membuat rooftop terasa aktif tanpa menjadi area eksklusif satu bangunan saja. 

**Rope Bridge**

Rope bridge sebaiknya menghubungkan:

* West Roof Deck → South Hall Roof Deck
* South Hall Roof Deck → East Roof Deck

Implementasi ini menjaga rooftop flow berbentuk busur atau setengah lingkaran, bukan loop penuh yang terlalu aman. Pemain bisa memotong arah, tetapi tetap harus turun kembali untuk rotasi penuh. Itu bagus untuk balance, karena rooftop memberi high ground tetapi tidak menjadi jalur permanen tanpa risiko. 

---

**Street dan Alley Implementation**

**Street Network — koridor keputusan**

Empat street utama selebar 3 block harus dibangun cukup bersih supaya sprint line terbaca. Jangan terlalu banyak dekorasi rendah yang mengganggu gerak atau hitbox. Street adalah jalur di mana Bearer paling kuat karena mereka bisa sprint lurus dan menekan target.

Supaya tidak terasa datar, street bisa diberi:

* broken archway
* banner DAIGON
* crystal vein di lantai atau sisi dinding
* lantern post dengan jarak konsisten
* elevation sangat ringan, tetapi jangan sampai memecah flow sprint

**Side Alley — jalur sempit yang tetap fair**

West Alley dan East Alley selebar 1–2 block adalah ruang tegang untuk outplay singkat. Karena sempit, alley harus dibangun dengan disiplin:

* jangan terlalu banyak tonjolan blok yang bikin macet
* tetap ada dua arah keluar
* lighting harus rapat
* ada satu-dua titik belok untuk putus line-of-sight
* jangan ada cul-de-sac penuh

Alley ideal untuk momen “Survivor lolos 2 detik lagi” atau “Bearer memotong dari depan,” jadi bentuknya harus mendukung drama itu, bukan sekadar lorong lurus panjang. 

---

**Spawn Hub sebagai Building Implementation**

Walaupun Spawn Hub bukan bangunan combat, implementasinya tetap penting karena ini ruang pembuka semua ronde. Ia harus terasa lebih formal, branded, dan simetris dibanding arena.

Komponen bangunannya:

* ruang pusat minimal 20 x 12
* crystal pedestal di tengah
* leaderboard wall minimal 16 block
* ready wall di sampingnya
* rules board yang mudah dibaca
* exit arch besar dengan barrier gate
* ceiling pattern bertema DAIGON

Secara arsitektur, Spawn Hub sebaiknya terasa seperti **arena chamber** yang bersih dan disengaja, bukan reruntuhan liar seperti bagian luar. Dengan kontras ini, pemain langsung paham mana ruang sistem dan mana ruang pertandingan. 

---

**Command Block Setup — Fokus Gameplay**

Supaya gameplay Dark Crystal berjalan stabil, implementasi command block paling aman adalah memecah ronde menjadi state-state yang jelas. Minimal ada logic untuk:

* ready system,
* bearer assignment,
* round timer,
* conversion detection,
* survivor count,
* final two alert,
* last survivor win,
* auto-reset.

```mcfunction
/scoreboard objectives add ready dummy
/scoreboard objectives add round_timer dummy
/scoreboard objectives add rounds_won dummy
/scoreboard objectives add streak dummy
/scoreboard objectives add conversions dummy
/scoreboard objectives add snowballs_used dummy
```

```mcfunction
# round init
/tag @a remove bearer
/tag @a remove survivor
/tag @r add bearer
/tag @a[tag=!bearer] add survivor

/effect @a[tag=bearer] speed 999999 1 true
/effect @a[tag=survivor] speed 999999 0 true
/give @a[tag=survivor] snowball 3
/title @a[tag=bearer] title YOU ARE THE BEARER
/title @a[tag=!bearer] title BEARER SELECTED
/scoreboard players set round_timer global 4800
```

```mcfunction
# round end
/title @a title LAST SURVIVOR
/scoreboard players add @p[tag=survivor] rounds_won 1
/clear @a
/tp @a 50 12 10
/tag @a remove bearer
/tag @a remove survivor
/tag @a remove ready
```

Contoh di atas bukan full script final, tetapi cukup untuk membantu membaca bagaimana role dibagikan, timer dijalankan, dan ronde dibersihkan kembali ke hub.

---

**Detail Desain Bangunan**

**Material dan Palette**

Palette yang paling tepat tetap mengikuti brief:

* sandstone / smooth sandstone untuk massa utama
* oak untuk rangka, railing, dan detail hangat
* mossy cobblestone untuk kesan tua
* blackstone / polished blackstone untuk elemen crystal pedestal dan frame penting
* amethyst / purple glass / sea lantern untuk aksen magical

Bangunan utama jangan didominasi blackstone, karena itu akan menggeser mood ke arah terlalu gelap. Blackstone lebih tepat dipakai sebagai aksen branded atau elemen crystal corruption. 

**Kerusakan Bangunan**

Kerusakan harus terlihat “terkontrol”. Maksudnya, bangunan tampak kuno dan rusak, tetapi jalur gameplay tetap jelas. Dinding yang bolong, jendela pecah, dan parapet patah boleh ada, tetapi jangan sampai pemain bingung mana jalur asli dan mana celah dekoratif. 

**Lighting**

Lighting harus berfungsi ganda:

* membuat map tidak pernah gelap total
* menandai jalur penting secara halus

Contohnya, akses tangga bisa dibuat sedikit lebih terang dari sudut lain. Pintu ke alley bisa diberi lantern pasangan. Bridge landing bisa diberi glow kecil supaya terlihat dari jauh. 

---

**Opsi Implementasi Bangunan**

**Opsi A — Open Ruin District (paling aman untuk gameplay cepat)**

Bangunan samping dibuat relatif terbuka, banyak celah dinding, interior ringkas, dan tangga langsung terlihat. Ini paling mudah dibaca pemain muda dan paling selaras dengan ronde cepat 3–5 menit. Kekurangannya, rasa “misteri bangunan tua” jadi lebih sedikit.

**Opsi B — Layered Interior District (lebih kaya jalur, lebih berisiko)**

Setiap bangunan punya interior sedikit lebih kompleks, ada split stair, balkon, dan lebih banyak sudut putus line-of-sight. Ini memberi outplay lebih banyak untuk pemain yang lebih tua, tetapi mudah menjadi terlalu aman atau membingungkan kalau tidak dikontrol.

**Opsi C — Hybrid District (paling seimbang)**

West dan East dibuat lebih terbuka seperti ruin cepat, sementara South Hall dibuat lebih utuh dan sedikit lebih kompleks. Ini menurut saya paling cocok untuk Dark Crystal karena memberi variasi identitas bangunan tanpa merusak keterbacaan keseluruhan map.

Untuk brief ini, **Opsi C** adalah pilihan paling kuat kalau targetnya pengalaman yang tetap kompetitif tetapi tidak monoton. 

---

**Contoh Implementasi Layout Bangunan**

```text
NORTH
[ Spawn Hub ]
      |
  North Street
      |
[West Ruin] -- [Town Square] -- [East Ruin]
     |              |               |
[West Alley]        |         [East Alley]
     \              |               /
      \------ [South Hall] --------/
              [Roof Deck]
```

**Contoh Implementasi Ukuran Konkret:**

* **Spawn Hub**: 20 x 12 block
* **Town Square**: 20 x 20 block
* **West Ruin**: 18 x 24 block, 2 lantai + rooftop
* **East Ruin**: 18 x 24 block, 2 lantai + rooftop
* **South Hall**: 28 x 20 block, 3 lantai ringan + rooftop
* **West Alley**: lebar 2 block
* **East Alley**: lebar 2 block
* **Main Street**: lebar 3 block
* **Rooftop bridge**: panjang 6–9 block per koneksi

Ukuran ini cukup besar untuk rotasi, tetapi masih cocok dengan footprint sekitar 100 x 100. 

---

**Building Rules yang Harus Masuk ke Checklist Builder**

Supaya implementasi bangunan tidak melenceng dari gameplay, saya sarankan builder memegang checklist ini:

```text
1. Setiap bangunan punya minimal 2 jalur keluar aktif
2. Tangga rooftop terlihat dalam 3 detik dari pintu masuk utama
3. Tidak ada kamar tertutup yang menjadi dead end murni
4. Rooftop cukup lebar untuk sprint duel
5. Alley punya lighting konsisten dan jalur tembus
6. South Hall tidak menjadi bunker aman
7. Street bebas dari clutter yang menghambat lari
8. Landmark utama selalu terlihat: Hub, Square, Ruin kiri, Ruin kanan, Hall selatan
```

Checklist ini penting karena bug bangunan paling umum dalam map PvP seperti ini bukan “kurang indah,” tetapi **terlalu aman, terlalu sempit, terlalu membingungkan, atau terlalu lambat dibaca**. 

---

**Aspek Kolaborasi**

Di fase produksi, building implementation paling aman dikerjakan setelah gameplay routing diset lebih dulu. Artinya, builder jangan mulai dari façade penuh, tetapi dari:

1. footprint dan jalur,
2. akses vertikal,
3. rooftop flow,
4. sightline,
5. baru detail visual.

Urutan ini akan mencegah kasus di mana bangunan terlihat bagus tetapi harus dibongkar ulang karena tidak mendukung chase. Setelah core route aman, baru branding DAIGON, crystal veins, banner, lantern, dan ruin detailing ditambahkan sebagai lapisan kedua. 

---

**Kejanggalan yang Tetap Perlu Konfirmasi**

Saya mempertahankan isi sebelumnya dan hanya menambahkan gameplay explanation, jadi titik ambigu ini tetap belum saya ubah.

**1. Posisi pasti tiga bangunan**
Brief sangat jelas soal jumlah dan fungsi zona, tetapi tidak mengunci orientasi bangunan secara eksplisit. Saya memakai interpretasi paling konservatif: barat, timur, selatan.

**2. Seberapa kompleks interior South Hall**
Secara gameplay, saya sarankan South Hall tetap terbuka dan tidak jadi bunker. Tetapi kalau Anda ingin South Hall lebih “hero building,” saya perlu batasan seberapa banyak ruang dalam yang masih dianggap aman.

**3. Seberapa dominan rooftop**
Brief mewajibkan rooftop layer aktif, tetapi tidak menyebut apakah rooftop harus menjadi jalur dominan atau sekadar opsi high-risk. Interpretasi saya sekarang: aktif, penting, tetapi bukan jalur paling aman.

**4. Touch vs sword hit**
Secara gameplay feel, ini penting karena akan menentukan apakah Dark Crystal terasa seperti infection-tag atau hunter PvP.

**5. Converted player tetap aktif atau masuk spectator**
Ini perlu dikunci karena akan memengaruhi seluruh pacing ronde.

---

**Penyesuaian Tingkat Kesulitan**

Untuk kelompok yang lebih muda **8–10 tahun**, bangunan sebaiknya lebih terbuka, tangga mudah terlihat, alley tidak terlalu panjang, dan rooftop bridge tidak terlalu banyak supaya orientasi mereka tetap stabil saat dikejar; pada sisi gameplay, timer lebih aman diletakkan dekat **5 menit** agar mereka punya waktu memahami role dan membaca ancaman. Untuk kelompok yang lebih tua **13–15 tahun**, interior bisa sedikit lebih berlapis, line-of-sight bisa dibuat lebih bervariasi, rooftop connection bisa lebih penting dalam rotasi, dan timer bisa dipadatkan ke **3–4 menit** supaya chase, conversion, dan final two terasa lebih kompetitif dari ronde ke ronde. 

Mau saya ubah ini jadi **versi final yang rapi seperti dokumen `.md` siap tempel**, atau lanjut saya pecah menjadi **Gameplay Implementation** dan **Building Implementation** sebagai dua section yang lebih formal?
