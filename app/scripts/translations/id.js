// Indonesian
'use strict';
var id = function() {}
id.code = 'id';
id.data = {

ACCOUNT_Add                 : 'Tambah Akun ',
ACCOUNT_Address             : 'Alamat Akun ',
ACCOUNT_AddWatch            : 'Tambah akun untuk dilihat ',
ACCOUNT_Balance             : 'Saldo Akun ',
ACCOUNT_Info                : 'Informasi Akun ',
ADDR_                       : 'Alamat Anda ',
ADDR_Desc                   : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Biasa dikenal dengan "Account #" atau "Public Key". Berikan alamat ini kepada yang ingin mengirim ether ke Anda. Icon yang ditampilkan di sampingnya memudahkan mengenal alamat Anda. ',
ADDR_From                   : 'Alamat Pengirim ',
ADDR_Save                   : 'Simpan alamat dompet Anda. ',
ADDR_Short                  : 'Alamat ',
ADDR_To                     : 'Alamat Tujuan ',
BULK_Generate               : 'Pembuatan Multiple Dompet ',
BULK_Label_1                : 'Jumlah Dompet yang akan dibuat ',
BULK_Label_2                : 'Buat Dompet ',
BULK_SuccessMsg             : 'Sukses! Dompet sudah berhasil dibuat. ',
CONTRACT_Bytecode           : 'Bytecode',
CONTRACT_Deploy             : 'Buat Contract ',
CONTRACT_GenBytecode        : 'Buat Bytecode ',
CONTRACT_GenBytecoded       : 'Bytecode yang dibuat ',
CONTRACT_GenInterface       : 'Interface yang dibuat ',
CONTRACT_Interact           : 'Interact with Contract ',
CONTRACT_Interact_CTA       : 'Pilih fungsi ',
CONTRACT_Interact_Title     : 'Kontrak Read / Write ',
CONTRACT_Json               : 'Interface ABI / JSON ',
CONTRACT_Multisig           : 'Multisig ',
CONTRACT_Read               : 'READ ',
CONTRACT_Title              : 'Contracts ',
CONTRACT_Title              : 'Alamat Kontrak ',
CONTRACT_Title_2            : 'Pilih kontrak yang ada ',
CONTRACT_Write              : 'WRITE ',
CX_quicksend                : 'QuickSend ', // if no appropriate translation, just use "Send"
DECRYPT_Access              : 'Pilihan cara mengakses dompet Anda? ',
DECRYPT_Label_1             : 'Pilihan cara membuat dompet ',
DECRYPT_Label_2             : 'Buat Alias: ',
DECRYPT_Label_3             : 'File Dompet anda ter-enkripsi. Masukkan password ',
DECRYPT_Label_5             : 'Masukkan alamat ',
DECRYPT_Ledger_0a           : 'Buka kembali MyEtherWallet melalui koneksi (SSL) yang aman ',
DECRYPT_Ledger_0b           : 'Buka kembali MyEtherWallet menggunakan [Chrome](https://www.google.com/chrome/browser/desktop/) atau [Opera](https://www.opera.com/) ',
DECRYPT_Ledger_1            : 'Hubungkan ke Ledger Nano S Anda ',
DECRYPT_Ledger_2            : 'Buka Aplikasi Ethereum (atau aplikasi kontrak) ',
DECRYPT_Ledger_3            : 'Periksa bahwa "Browser Support" sudah di aktifkan di "Settings" ',
DECRYPT_Ledger_4            : 'Jika "Browser Support" tidak ditemukan di "Settings", pastikan sudah mengupdate ke [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_scan         : 'Hubungkan ke Ledger Nano S ',
DECRYPT_Radio_2             : 'Pilih file dompet (Keystore/JSON) ',
DECRYPT_Radio_2_alt         : 'Pilih file dompet ',
DECRYPT_Radio_2_short       : 'PILIH FILE DOMPET... ',
DECRYPT_Radio_3             : 'Paste/Ketik Private Key Anda ',
DECRYPT_Title               : 'Pilih format private key: ',
DECRYPT_Trezor_scan         : 'Hubungkan ke TREZOR ',
ENS_Desc                    : 'The [Ethereum Name Service](http://ens.readthedocs.io/en/latest/introduction.html) is a distributed, open, and extensible naming system based on the Ethereum blockchain. Once you have a name, you can tell your friends to send ETH to `mewtopia.eth` instead of `0x7cB57B5A97eAbe942.....`.',
ENS_Name                    : 'ENS Name',
ENS_Title                   : 'ENS',
ERROR_0                     : 'Masukkan jumlah yang valid. ',
ERROR_1                     : 'Password minimal terdiri dari 9 huruf. Pastikan password Anda kuat. ',
ERROR_10                    : 'Jumlah Gas tidak valid. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Nonce tidak valid. (Must be integer.) ', // 11
ERROR_12                    : 'Signed transaction tidak valid. ',
ERROR_13                    : 'Sudah ada Dompet dengan nickname ini. ',
ERROR_14                    : 'Dompet tidak ditemukan. ',
ERROR_15                    : 'Tidak ditemukan proposal dengan ID ini atau terjadi error saat membaca proposal ini. ',
ERROR_16                    : 'Terdapat dompet dengan alamat yang sama di storage. Cek kembali halaman dompet Anda. ',
ERROR_17                    : 'Dana tidak mencukupi. Akun yang dipakai untuk mengirim tidak memiliki dana yang cukup. Minimal harus ada **0.01 ETH** di akun untuk menutup biaya gas. Tambahkan ether dan coba lagi. ',
ERROR_18                    : 'Semua gas akan digunakan pada transaksi ini. Ini berarti Anda telah memberikan suara pada proposal ini atau periode perdebatan telah berakhir. ',
ERROR_19                    : 'Simbol tidak valid ',
ERROR_2                     : 'Maaf! tipe dompet ini tidak dikenal. ',
ERROR_20                    : 'Bukan ERC-20 token yang valid.',
ERROR_21                    : 'Tidak dapat memperkirakan gas. Saldo di akun tidak cukup, atau alamat kontrak penerima bisa mengeluarkan error. Cobalah untuk secara manual mengatur gas dan melanjutkan. Keterangan Error saat pengiriman mungkin lebih informatif. ',
ERROR_22                    : 'Please enter a valid node name', // 22
ERROR_23                    : 'Please enter a valid URL. If you are on https, your URL must be https', // 23
ERROR_24                    : 'Please enter a valid port. ', // 24
ERROR_25                    : 'Please enter a valid chain ID. ', // 25
ERROR_26                    : 'Please enter a valid ABI. ', // 26
ERROR_27                    : 'Minimum amount: 0.01. Max amount: ', // 27
ERROR_28                    : '**DIPERLUKAN File Keystore & password** (atau Private Key) untuk mengakses dompet Anda. Simpan dan backup dengan baik file ini! Tidak ada mekanisme untuk me-recover dompet jika file-nya hilang. Baca instruksi lengkapnya [di sini](https://www.myetherwallet.com/#help). ',
ERROR_29                    : 'Please enter a valid user and password. ', // 29
ERROR_3                     : 'Ini bukan file dompet yang valid. ',
ERROR_30                    : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                    : 'Please enter a valid secret phrase. ', // 31
ERROR_32                    : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35
ERROR_36                    : 'Enter valid TX hash', // 36
ERROR_37                    : 'Enter valid hex string (0-9, a-f)', // 37
ERROR_38                    : 'You must be offline to access private keys.', //38
ERROR_39                    : 'You must be online to continue.', //39
ERROR_4                     : 'Unit tidak valid, gunakan salah satu dari unit berikut ',
ERROR_5                     : 'Alamat tidak valid. ',
ERROR_6                     : 'Password tidak valid. ',
ERROR_7                     : 'Jumlah tidak valid. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Gas limit tidak valid. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Nilai data tidak valid. (Must be hex.) ', // 9
ERROR_CX_01                 : 'Anda tidak memiliki Dompet yang disimpan sebelumnya. Klik ["Buat Dompet"](/cx-wallet.html#add-wallet) untuk membuatnya! ',
FOOTER_1                    : 'Client-side tool open source berbasis javascript untuk membuat Dompet dan transaksi Ethereum. ',
FOOTER_1b                   : 'Oleh ',
FOOTER_2                    : 'Donasi Anda akan sangat dihargai: ',
FOOTER_3                    : 'Pembuatan Dompet Client-side wallet oleh ',
FOOTER_4                    : 'Disclaimer ',
GEN_ConfButton              : 'I understand. Continue.',
GEN_Help_1                  : 'Use your',
GEN_Help_10                 : 'Right click & save file as. Filename: ',
GEN_Help_11                 : 'Don\'t open this file on your computer ',
GEN_Help_12                 : 'Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity and other wallet clients.) ',
GEN_Help_13                 : 'How to Back Up Your Keystore File ',
GEN_Help_14                 : 'What are these Different Formats? ',
GEN_Help_15                 : 'Preventing loss &amp; theft of your funds.',
GEN_Help_16                 : 'What are these Different Formats?',
GEN_Help_17                 : 'Why Should I?',
GEN_Help_18                 : 'To have a secondary backup.',
GEN_Help_19                 : 'In case you ever forget your password.',
GEN_Help_2                  : 'to access your account.',
GEN_Help_20                 : 'Cold Storage',
GEN_Help_21                 : 'How do I save/backup my wallet? ',
GEN_Help_3                  : 'Your device * is * your wallet.',
GEN_Help_4                  : 'Guides & FAQ',
GEN_Help_5                  : 'How to Create a Wallet',
GEN_Help_6                  : 'Getting Started',
GEN_Help_7                  : 'Keep it safe · Make a backup · Don\'t share it with anyone · Don\'t lose it · It cannot be recovered if you lose it.',
GEN_Help_8                  : 'Not Downloading a File? ',
GEN_Help_9                  : 'Try using Google Chrome ',
GEN_Label_5                 : 'Save Your Private Key ',
GEN_Unlock                  : 'Unlock your Wallet to See Your Address',
GETH_Balance                : 'Saldo tidak mencukupi ',
GETH_Cheap                  : 'Harga Gas terlalu kecil untuk dapat diterima ',
GETH_GasLimit               : 'Melebihi limit blok gas ',
GETH_InsufficientFunds      : 'Tidak cukup saldo untuk gas * harga + nilai ',
GETH_IntrinsicGas           : 'Gas intrinsik terlalu rendah ',
GETH_InvalidSender          : 'Pengirim tidak valid ',
GETH_NegativeValue          : 'Nilai negatif ',
GETH_Nonce                  : 'Nonce terlalu rendah ',
GETH_NonExistentAccount     : 'Akun tidak ditemukan atau saldo terlalu rendah ',
MNEM_1                      : 'Pilih alamat yang Anda inginkan untuk berinteraksi. ',
MNEM_2                      : 'Satu frasa "HD mnemonic" dapat mengakses beberapa  dompet / alamat. Pilih alamat yang Anda inginkan untuk dipakai. ',
MNEM_Enter                  : 'Paste/Ketik Mnemonic Anda ',
MNEM_Enter_Path             : 'Select HD derivation path ',
MNEM_Enter_PathCustom       : 'Custom',
MNEM_more                   : 'Tampilkan Alamat berikutnya ',
MNEM_prev                   : 'Tampilkan Alamat sebelumnya ',
MSG_date                    : 'Tanggal ',
MSG_info1                   : 'Cantumkan tanggal hari ini sehingga "Signature" tidak dapat dipakai ulang pada tanggal yang berbeda. ',
MSG_info2                   : 'Cantumkan nama atau "nickname" Anda dan dimana "nickname" tersebut dipakai sehingga pihak lain tidak dapat memakainya. ',
MSG_info3                   : 'Cantumkan alasan yang spesifik untuk pesan ini sehingga pesan yang ditandai ini tidak dapat dipakai ulang untuk keperluan lain. ',
MSG_message                 : 'Pesan ',
MSG_Sign                    : 'Penandaan Pesan ',
MSG_signature               : 'Signature ',
MSG_verify                  : 'Verifikasi Pesan ',
NODE_CTA                    : 'Simpan & Pakai Node Custom',
NODE_Name                   : 'Nama Node',
NODE_Port                   : 'Port Node',
NODE_Subtitle               : 'Untuk terhubung ke node lokal...',
NODE_Title                  : 'Set Up Node Custom Anda',
PARITY_AlreadyImported      : "Transaksi dengan hash yang sama sudah pernah di-impor sebelumnya.",
PARITY_GasLimitExceeded     : "Biaya transaksi melebihi limit gas yang berlaku. Limit: {}, tersedia: {}. Coba turunkan gas yang disediakan.",
PARITY_InsufficientBalance  : "Dana tidak mencukupi. Akun yang dipakai untuk mengirim tidak memiliki dana yang cukup. Diperlukan {} dan hanya tersedia: {}.",
PARITY_InsufficientGasPrice : "Biaya transaksi terlalu rendah. Tidak memenuhi nilai biaya minimal untuk node Anda(minimal: {}, got: {}). Coba naikkan biaya transaksi.",
PARITY_InvalidGasLimit      : "Gas yang disediakan nilainya diatas limit.",
PARITY_LimitReached         : "Terlalu banyak transaksi dalam antrian. Transaksi Anda gugur karena melampaui batas. Coba naikkan biaya transaksi",
PARITY_Old                  : "Nonce transaksi terlalu kecil. Coba naikkan nilai Nonce-nya.",
PARITY_TooCheapToReplace    : "Biaya transaksi terlalu rendah. Ada transaksi lain dengan nonce yang sama dalam antrian. Coba naikkan biaya transaksi atau naikkan nonce-nya.",
PW_                         : 'Password ',
PW_Desc                     : 'This password * encrypts * your private key. This does not act as a seed to generate your keys. **You will need this password + your private key to unlock your wallet.**',
PW_Enter                    : 'Masukkan password yang kuat (setidaknya 9 karakter) ',
PW_Optional                 : 'Password (optional) ',
SEND_Advanced               : '+Advanced',
SEND_O_Modal_Title          : 'WARNING! Do not go back online yet!',
SENDModal_Content_1         : 'Anda akan mengirim ',
SENDModal_Content_2         : 'ke alamat ',
SENDModal_Content_3         : 'Apakah ini benar? ',
SENDModal_Content_4         : 'CATATAN: Jika terjadi Error, kemungkinan Anda harus menambah Ether ke akun Anda untuk menutup biaya gas dan pengiriman. Gas dibayar dalam Ether. ',
SENDModal_No                : 'Batalkan! ',
SENDModal_OK                : 'Okay, get me out of here! ',
SENDModal_Title             : 'PERINGATAN! ',
SENDModal_Yes               : 'Ya! Laksanakan Transaksi-nya. ',
SIDEBAR_donate              : 'Kirim Donasi ',
SIDEBAR_donation            : 'MyEtherWallet dapat dipergunakan secara cuma-cuma berdasarkan prinsip open source dengan tetap menjaga privasi dan keamanan. Semakin banyak donasi yang kami terima, semakin banyak waktu yang kami dapat luangkan untuk membuat fitur-fitur baru dan mewujudkan usulan dan keinginan para penggunanya. Tim kami yang terdiri dari hanya dua orang sangat membutuhkan dukungan Anda untuk mewujudkan cita-cita kami dalam membuat dunia yang semakin baik ',
SIDEBAR_Equiv               : 'Nilai Ekuivalent ',
SIDEBAR_thanks              : 'Terima Kasih!!! ',
SUCCESS_1                   : 'Alamat valid ',
SUCCESS_2                   : 'Dompet telah ter-dekripsi ',
SUCCESS_3                   : 'Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ', //'Transaksi diajukan. TX Hash ',
SUCCESS_4                   : 'Dompet Anda telah ditambahkan ',
SUCCESS_5                   : 'File Terpilih ',
SUCCESS_6                   : 'You are successfully connected ',
SUCCESS_7                   : 'Message Signature Verified',
SWAP_elapsed                : 'Time elapsed since sent ',
SWAP_information            : "Informasi Anda ",
SWAP_init_1                 : "Saya ingin menukar ",
SWAP_init_2                 : " menjadi ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Lanjutkan! ", // or "Continue"
SWAP_order_CTA              : "Kirimkan ", // Please send 1 ETH...
SWAP_progress_1             : "Perintah Dijalankan ",
SWAP_progress_2             : "Menunggu ", // Waiting for your BTC...
SWAP_progress_3             : "Diterima! ", // ETH Received!
SWAP_progress_4             : "Mengirim {{orderResult.output.currency}} ",
SWAP_progress_5             : "Perintah Selesai ",
SWAP_rates                  : "Nilai Tukar yang berlaku ",
SWAP_rec_add                : "Alamat penerima Anda ",
SWAP_rec_amt                : "Jumlah untuk diterima ",
SWAP_ref_num                : "Nomor referensi Anda ",
SWAP_start_CTA              : "Tukarkan ",
SWAP_time                   : "Sisa waktu untuk mengirim ",
SWAP_Title                  : 'Tukarkan ',
SWAP_unlock                 : "Unlock wallet Anda untuk mengirim ETH atau Token langsung dari halaman ini. ",
SWAP_your_rate              : "Nilai tukar Anda ",
TOKEN_AddCustom             : 'Tambahkan "Custom Token" ',
TOKEN_Balance               : 'Saldo Token ',
TOKEN_Dec                   : 'Desimal ',
TOKEN_hide                  : 'Jangan tampilkan Token ',
TOKEN_show                  : 'Tampilkan Semua Token ',
TOKEN_Symbol                : 'Simbol Token ',
TX_Broadcast                : 'Broadcast Transaction',
TX_Broadcast_Desc           : 'Paste your signed transaction below &amp; press the button. A confirmation dialog showing your transaction details will be shown before it attempts to broadcast it to the network. Please double check how much of what coin to what address you are sending.',
TX_Cancel                   : 'Cancel Transaction',
TX_CancelReplace            : 'Cancel or Replace Transaction',
TX_Details                  : 'Transaction Details',
TX_Generate                 : 'Laksanakan Transaksi ',
TX_Hash                     : 'TX Hash',
TX_History                  : 'Sejarah Transaksi ',
TX_Replace                  : 'Replace Transaction',
TX_Send_All                 : 'Kirim seluruh Saldo ',
TX_Send_Desc                : 'Enter the address of the account you will be sending from to get started. You will sign your transaction with your `private key` or `keystore file + password` right before you send.',
TX_Send_Short               : 'Send',
TX_Send_Title               : 'Kirim Ether dan Tokens ',
TX_Sign                     : 'Laksanakan Transaksi ',
TX_Sign_Offline             : 'Sign Transaction Offline',
TX_Signed                   : 'Signed Transaction ',
TX_TXFee                    : 'TX Fee',
TX_TXFeeDesc                : 'The TX Fee is paid to miners for including your TX in a block. Is is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)',
TX_Unsigned                 : 'Unsigned Transaction ',
TX_View                     : 'View Transaction Status',
TX_View_Short               : 'View Transaction',
VIEWTX_Desc                 : 'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. ** This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full. [Please, read about this tool here.](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent)**',
VIEWTX_Found                : 'Pending Transaction Found',
VIEWTX_Found_1              : 'Your transaction was located in the TX Pool of the node you are connected to. ',
VIEWTX_Found_2              : 'It is currently pending (waiting to be mined). ',
VIEWTX_Found_3              : 'There is a chance you can "cancel" or replace this transaction. Unlock your wallet below.',
VIEWTX_FoundOnChain         : 'Transaction Found',
VIEWTX_FoundOnChain_1       : 'Your transaction was successfully mined and is on the blockchain.',
VIEWTX_FoundOnChain_2       : '**If you see a red `( ! )`, a `BAD INSTRUCTION` or `OUT OF GAS` error message**, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.',
VIEWTX_FoundOnChain_3       : '**If you do not see any errors, your transaction was successfully sent.** Your ETH or Tokens are where you sent them. If you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it has been 24+ hours since you sent, please [contact that service](https://myetherwallet.groovehq.com/knowledge_base/topics/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do). Send them the *link* to your transaction and ask them, nicely, to look into your situation.',
VIEWTX_NotFound             : 'Transaction Not Found',
VIEWTX_NotFound_1           : 'This TX cannot be found in the TX Pool of the node you are connected to.',
VIEWTX_NotFound_2           : 'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again. ',
VIEWTX_NotFound_3           : 'It could still be in the TX Pool of a different node, waiting to be mined.',
VIEWTX_NotFound_4           : 'Please use the dropdown in the top-right & select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.',
VIEWTX_Title                : 'View Transaction',
VIEWWALLET_Subtitle         : 'Memungkinkan Anda untuk mencetak Dompet Kertas dari berbagai format atau versi "private key". Hal ini diperlukan pada saat anda ingin [mengimpor akun Anda ke Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Jika Anda hanya ingin pengecekan saldo, pakailah salah satu layanan blockchain explorer seperti [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Untuk pencetakan Dompet Kertas dari berbagai format "private key". ',
WALL_                       : 'Dompet ',
WALL_Add                    : 'Tambahkan Dompet ',
WALL_Create                 : 'Buat Dompet ',
WALL_Edit                   : 'Edit Dompet ',
WALL_Edit_Short             : 'Edit ',
WALL_GenerateNew            : 'Buat dompet baru ',
WALL_Hide                   : 'Sembunyikan Informasi Dompet ',
WALL_Name                   : 'Nama Dompet ',
WALL_Nickname               : 'Dompet Alias ',
WALL_Remove                 : 'Hapus ',
WALL_RemoveWal              : 'Hapus Dompet: ',
WALL_Select                 : 'Pilih dompet: ',
WALL_Unlock                 : 'Unlock dompet ',
WALL_Unlock_Short           : 'Unlock ',
WALL_View                   : 'Lihat Info Dompet ',
WALL_View_Short             : 'Tampilkan ',
WALL_Viewing                : 'Viewing Wallet ',
WALL_walletViewCX           : 'Dompet Saya ',
WALL_WatchOnlyAccounts      : 'Akun Untuk-Dilihat-Saja Anda ',
WALL_Your                   : 'Dompet Anda ',
WARN_01                     : 'Pastikan menggunakan URL yang benar sebelum mengakses Dompet Anda atau sebelum membuat dompet baru. Waspadai situs phishing! ',
WARN_02                     : 'Alamat, jumlah, gas atau informasi telah diisikan untuk Anda. Informasi tersebut dapat Anda rubah sebelum pengiriman. Buka kunci dompet Anda Untuk memulai. ',
WARN_03                     : 'Akun untuk "dilihat" dapat ditambahkan tanpa menggunakan private key. Namun berarti tidak ada akses ke dompet tersebut dan transfer Ether tidak bisa dilakukan. ',
WARN_04                     : 'Pastikan membuat **backup eksternal** dari semua dompet yang ada. Banyak hal bisa terjadi yang bisa membuat data di Chrome Extension hilang, termasuk saat menginstall maupun menguninstall extension ini. Extension ini hanya untuk memudahkan mengakses dompet Anda, **BUKAN** untuk membackup. ',
WARN_05                     : 'Node Anda harus berupa HTTPS untuk dapat terhubung melalui MyEtherWallet.com. Anda dapat [mengunduh MyEtherWallet repo & menjalankannya secara lokal](https://github.com/kvhnuke/etherwallet/releases/latest) untuk terhubung ke node apa saja. Atau, dapatkan SSL certificate gratis melalui [LetsEncrypt](https://letsencrypt.org/)',
WARN_06                     : 'Peringatan! Anda akan menghapus Dompet ',
WARN_07                     : 'Pastkan Anda telah **menyimpan private key dan/atau File Keystore File dan password** sebelum menghapus Dompet. ',
WARN_08                     : 'Jika Anda akan memakai dompet ini dengan MyEtherWallet CX Anda ke depan, private key/JSON dan password harus ditambahkan lagi secara manual. ',
WARN_09_A                   : 'Warning! You do not have enough funds to complete this swap',
WARN_09_B                   : 'Please add more funds to your wallet or access a different wallet',
x_Access                    : 'Akses ',
x_Add                       : 'Add ',
x_Amount                    : "Jumlah untuk dikirim ",
x_Amount_short              : 'Jumlah ',
x_Cancel                    : 'Batal ',
x_Contact                   : 'Kontak ',
x_Continue                  : 'Continue',
x_Data                      : 'Data ',
x_DataDesc                  : 'Ini opsional/tidak harus diisi. Data biasanya diperlukan jika bertransaksi melalui kontrak. ',
x_Download                  : 'Unduh ',
x_GasLimit                  : 'Limit Gas ',
x_GasLimitDesc              : 'Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.',
x_GasPrice                  : 'Harga Gas ',
x_GasPriceDesc              : 'Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `21 GWEI`.',
x_Help                      : 'Bantuan ',
x_Keystore                  : 'File Keystore (UTC / JSON · Format yang direkomendasikan · Ter-enkripsi) ',
x_Keystore2                 : 'File Keystore (UTC / JSON) ',
x_Keystore_Save             : 'Simpan Keystore atau Private Key. Jangan lupa Password-nya. ',
x_KeystoreDesc              : 'File Keystore ini sesuai dengan format yang dipakai Mist sehingga memudahkan untuk diimpor di kemudian hari. File ini yang disarankan untuk di unduh dan di backup. ',
x_Mnemonic                  : 'Mnemonic Phrase ',
x_Nonce                     : 'Nonce ',
x_NonceDesc                 : 'The nonce is the number of transactions sent from a given address. It ensures transactions are sent in order & not sent more than once.',
x_ParityPhrase              : 'Parity Phrase ',
x_Print                     : 'Print Dompet Kertas ',
x_PrintDesc                 : 'ProTip: klik print dan simpan sebagai PDF jika Anda tidak memiliki printer! ',
x_PrintShort                : 'Print ',
x_PrivKey                   : 'Private Key (Tidak ter-enkripsi) ',
x_PrivKey2                  : 'Private Key ',
x_PrivKeyDesc               : 'Ini adalah versi text yang tidak ter-enkripsi dan tidak memerlukan password. Jika file yang tidak ter-enkripsi ini sampai didapatkan orang lain, mereka dapat mengakses dompet Anda tanpa password. Oleh karenanya, sangat direkomendasikan untuk selalu memakai versi yang ter-enkripsi. ',
x_ReadMore                  : 'Read More',
x_Save                      : 'Simpan ',
z_TRANSLATE1                : '[Yos Ginting](https://www.myetherwallet.com/?gaslimit=21000&to=0x8F646C5c215be6E0163f02Bd2eB97AFC2DF70e5c&value=0.1#send-transaction) ',
z_TRANSLATE2                : '',
z_TRANSLATE3                : '',
z_TRANSLATE4                : '',
z_TRANSLATE5                : '',
z_TRANSLATEDesc             : 'Thank you to our translators ',
z_TRANSLATEVersion          : '4.0'

/* Translation Info [YOUR_NAME](https://www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · */

};

module.exports = id;
