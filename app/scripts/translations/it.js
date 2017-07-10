// Italian Last sync with en.js : commit f025c496254b8ce69660b682f90ec3dc5a12caa8
'use strict';
var it = function() {}
it.code = 'it';
it.data = {

ACCOUNT_Add                     : 'Aggiungi conto ',
ACCOUNT_Address                 : 'Indirizzo conto ',
ACCOUNT_AddWatch                : 'Aggiungi un conto da osservare ',
ACCOUNT_Balance                 : 'Saldo conto ',
ACCOUNT_Info                    : 'Informazioni conto ',
ADDR_                           : 'Il tuo indirizzo ',
ADDR_Desc                       : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Potresti sentirlo chiamare "Numero di conto" o "Chiave pubblica". È ciò che dai a chi ti vuole inviare degli ether. L\'icona è un modo facile di riconoscere il tuo indirizzo. ',
ADDR_From                       : 'Indirizzo mittente ',
ADDR_Save                       : 'Salva il tuo indirizzo. ',
ADDR_Short                      : 'Indirizzo ',
ADDR_To                         : 'Indirizzo destinatario ',
BULK_Generate                   : 'Generazione multipla ',
BULK_Label_1                    : 'Numero di portafogli da generare ',
BULK_Label_2                    : 'Genera portafogli ',
BULK_SuccessMsg                 : 'Perfetto! I tuoi portafogli sono stati generati. ',
CONTRACT_Address                : 'Indirizzo contratto ',
CONTRACT_Bytecode               : 'Bytecode',
CONTRACT_Deploy                 : 'Pubblica contratto ',
CONTRACT_GenBytecode            : 'Genera bytecode ',
CONTRACT_GenBytecoded           : 'Bytecode generato ',
CONTRACT_GenInterface           : 'Interfaccia generata ',
CONTRACT_Interact               : 'Interagisci con un contratto ',
CONTRACT_Interact_CTA           : 'Seleziona una funzione ',
CONTRACT_Interact_Title         : 'Leggi da / Scrivi su contratto ',
CONTRACT_Json                   : 'Interfaccia ABI / JSON ',
CONTRACT_Multisig               : 'Multifirma ',
CONTRACT_Read                   : 'LEGGI ',
CONTRACT_Title                  : 'Contratti ',
CONTRACT_Title_2                : 'Seleziona contratto esistente ',
CONTRACT_Write                  : 'SCRIVI ',
CX_quicksend                    : 'Invio rapido ',
DECRYPT_Access                  : 'Come vuoi accedere al tuo portafoglio? ',
DECRYPT_Label_1                 : 'Cosa vuoi fare? ',
DECRYPT_Label_2                 : 'Crea un nome: ',
DECRYPT_Label_3                 : 'Il portafoglio è crittografato. Inserire la password ',
DECRYPT_Label_5                 : 'Inserisci l\'indirizzo ',
DECRYPT_Ledger_0a               : 'Riapri MyEtherWallet su una connessione sicura (SSL) ',
DECRYPT_Ledger_0b               : 'Riapri MyEtherWallet utilizzando [Chrome](https://www.google.com/chrome/browser/desktop/) o [Opera](https://www.opera.com/) ',
DECRYPT_Ledger_1                : 'Collega il tuo Ledger Nano S ',
DECRYPT_Ledger_2                : 'Apri l\'applicazione Ethereum (o l\'applicazione di un contratto) ',
DECRYPT_Ledger_3                : 'Verifica che il supporto browser sia abilitato nelle impostazioni ',
DECRYPT_Ledger_4                : 'Se non c\'è l\'opzione per il supporto browser nelle impostazioni, verifica di avere un [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
DECRYPT_Ledger_scan             : 'Collegati al Ledger Nano S ',
DECRYPT_Radio_2                 : 'Seleziona il file del tuo portafoglio (Keystore / JSON) ',
DECRYPT_Radio_2_alt             : 'Seleziona il file del tuo portafoglio ',
DECRYPT_Radio_2_short           : 'SELEZIONA FILE PORTAFOGLIO... ',
DECRYPT_Radio_3                 : 'Incolla/Inserisci la tua chiave privata ',
DECRYPT_Title                   : 'Seleziona il formato della tua chiave privata: ',
DECRYPT_Trezor_scan             : 'Collegati al TREZOR ',
ENS_Desc                        : 'The [Ethereum Name Service](http://ens.readthedocs.io/en/latest/introduction.html) is a distributed, open, and extensible naming system based on the Ethereum blockchain. Once you have a name, you can tell your friends to send ETH to `mewtopia.eth` instead of `0x7cB57B5A97eAbe942.....`.',
ENS_Name                        : 'ENS Name',
ENS_Title                       : 'ENS',
ERROR_0                         : 'Ti preghiamo di inserire una quantità valida. ',
ERROR_1                         : 'La password deve essere di almeno 9 caratteri. Assicurati che sia robusta. ',
ERROR_10                        : 'Inserisci prezzo valido per il gas. (Deve essere un intero. Prova 20 GWEI / 20000000000 WEI.) ',
ERROR_11                        : 'Inserisci un nonce valido. (Deve essere un intero.) ', // 11
ERROR_12                        : 'Transazione firmata non valida. ',
ERROR_13                        : 'Esiste già un portafoglio con questo nome. ',
ERROR_14                        : 'Portafoglio non trovato. ',
ERROR_15                        : 'Ops. Sembra che non esista ancora una proposta con questo ID o c\'è un errore nella lettura della proposta. ', // 15 - NOT USED
ERROR_16                        : 'C\'è già un portafoglio con questo indirizzo fra quelli salvati. Controlla la pagina dei tuoi portafogli. ',
ERROR_17                        : 'L\'account dal quale stai provando ad inviare la transazione non ha abbastanza fondi. Se stai inviando token, ti servono 0,01 ETH nel conto per coprire i costi del gas. ',
ERROR_18                        : 'Questa transazione consumerebbe tutto il gas. Ciò significa che hai già votato questa proposta o che il periodo di discussione è terminato. ',
ERROR_19                        : 'Inserisci un simbolo valido ',
ERROR_2                         : 'Siamo spiacenti! Non riconosciamo questo tipo di file portafoglio. ',
ERROR_20                        : 'Non è un token ERC-20 valido. ',
ERROR_21                        : 'Impossibile eseguire una stima del gas necessario. Non ci sono abbastanza fondi nel conto, oppure l\'indirizzo del contratto ricevente genererebbe un errore. Puoi inserire il gas manualmente e procedere. Il messaggio di errore al momento dell\'invio potrebbe contenere ulteriori informazioni. ',
ERROR_22                        : 'Inserisci un nome di nodo valido ',
ERROR_23                        : 'Inserisci un URL valido. Se usi https, l\'URL deve cominciare con https',
ERROR_24                        : 'Inserisci una porta valida ',
ERROR_25                        : 'Inserisci un ID catena valido ',
ERROR_26                        : 'Inserisci una ABI valida ',
ERROR_27                        : 'Importo minimo: 0.01. Importo massimo: ',
ERROR_28                        : 'Avrai bisogno del file del tuo portafoglio e della password per avere accesso a questo portafoglio in futuro. ',
ERROR_29                        : 'Inserisci un nome utente e una password validi ',
ERROR_3                         : 'This is not a valid wallet file. ', // 3
ERROR_30                        : 'Please enter a valid name (7+ characters, limited punctuation) ', // 30
ERROR_31                        : 'Please enter a valid secret phrase. ', // 31
ERROR_32                        : 'Could not connect to the node. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                        : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                        : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                        : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35
ERROR_36                        : 'Enter valid TX hash', // 36
ERROR_37                        : 'Enter valid hex string (0-9, a-f)', // 37
ERROR_38                        : 'You must be offline to access private keys.', //38
ERROR_39                        : 'You must be online to continue.', //39
ERROR_4                         : 'This unit doesn\'t exists, please use the one of the following units ', // 4
ERROR_5                         : 'Inserisci un indirizzo valido. ',
ERROR_6                         : 'Inserisci una password valida. ',
ERROR_7                         : 'Inserisci dei decimali validi. (Deve essere un intero. Prova 0-18.) ', // 7
ERROR_8                         : 'Inserisci un limite gas valido. (Deve essere un intero. Prova 21000-4000000.) ', // 8
ERROR_9                         : 'Inserisci un valore valido per i dati. (Deve essere una stringa esadecimale.) ', // 9
ERROR_CX_01                     : 'Non c\'è nessun portafoglio. Fai clic su ["Aggiungi portafoglio"](/cx-wallet.html#add-wallet) per aggiungerne uno! ',
FOOTER_1                        : 'Strumento open source lato client per interagire facilmente e in modo sicuro con la rete Ethereum. ',
FOOTER_1b                       : 'Creato da ',
FOOTER_2                        : 'Donazioni molto apprezzate: ',
FOOTER_3                        : 'Generazione portafogli lato client da parte di ',
FOOTER_4                        : 'Dichiarazione di non responsabilità ',
GEN_ConfButton                  : 'I understand. Continue.',
GEN_Help_1                      : 'Usa il tuo',
GEN_Help_10                     : 'Right click & save file as. Filename: ',
GEN_Help_11                     : 'Don\'t open this file on your computer ',
GEN_Help_12                     : 'Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity and other wallet clients.) ',
GEN_Help_13                     : 'How to Back Up Your Keystore File ',
GEN_Help_14                     : 'What are these Different Formats? ',
GEN_Help_15                     : 'Preventing loss &amp; theft of your funds.',
GEN_Help_16                     : 'What are these Different Formats?',
GEN_Help_17                     : 'Why Should I?',
GEN_Help_18                     : 'To have a secondary backup.',
GEN_Help_19                     : 'In case you ever forget your password.',
GEN_Help_2                      : 'per accedere al tuo account.',
GEN_Help_20                     : 'Cold Storage',
GEN_Help_3                      : 'Il tuo dispositivo * è * il tuo portafoglio.',
GEN_Help_4                      : 'Guide & FAQ',
GEN_Help_5                      : 'Come Creare un Portafoglio',
GEN_Help_6                      : 'Per iniziare',
GEN_Help_7                      : 'Keep it safe · Make a backup · Don\'t share it with anyone · Don\'t lose it · It cannot be recovered if you lose it.',
GEN_Help_8                      : 'Not Downloading a File? ',
GEN_Help_9                      : 'Prova ad usare Google Chrome ',
GEN_Label_5                     : 'Save Your Private Key ',
GEN_SuccessMsg                  : 'Perfetto! Il tuo portafoglio è stato generato. ',
GEN_Unlock                      : 'Unlock your Wallet to See Your Address',
GETH_Balance                    : 'Saldo insufficiente ',
GETH_Cheap                      : 'Prezzo del gas troppo basso per essere accettato ',
GETH_GasLimit                   : 'Eccede il limite gas per il blocco ',
GETH_InsufficientFunds          : 'Fondi insufficienti per gas * prezzo + valore ',
GETH_IntrinsicGas               : 'Gas intrinseco troppo basso ',
GETH_InvalidSender              : 'Mittente non valido ',
GETH_NegativeValue              : 'Valore negativo ',
GETH_Nonce                      : 'Nonce troppo basso ',
GETH_NonExistentAccount         : 'Il conto non esiste o il saldo è insufficiente ',
MNEM_1                          : 'Seleziona l\'indirizzo col quale vuoi interagire. ',
MNEM_2                          : 'Con una singola frase mnemonica puoi avere accesso a un certo numero di portafogli / indirizzi. Seleziona l\'indirizzo con il quale vuoi interagire in questo momento. ',
MNEM_Enter                      : 'Incolla/Inserisci la tua frase mnemonica ',
MNEM_Enter_Path                 : 'Seleziona un percorso di derivazione HD ',
MNEM_Enter_PathCustom           : 'altro',
MNEM_more                       : 'Altri indirizzi ',
MNEM_prev                       : 'Indirizzi precedenti ',
MSG_date                        : 'Data ',
MSG_info1                       : 'Inserisci la data corrente per far sì che la firma non possa essere riutilizzata in un altro momento. ',
MSG_info2                       : 'Indica il tuo nickname e dove lo usi in modo che qualcun altro non possa usarlo. ',
MSG_info3                       : 'Includi una ragione specifica per il messaggio, così che non possa essere riutilizzato per uno scopo diverso. ',
MSG_message                     : 'Messaggio ',
MSG_Sign                        : 'Firma messaggio ',
MSG_signature                   : 'Firma ',
MSG_verify                      : 'Verifica messaggio ',
NODE_CTA                        : 'Salva & utilizza il nodo',
NODE_Name                       : 'Nome del nodo',
NODE_Port                       : 'Porta del nodo',
NODE_Subtitle                   : 'Per collegarti a un nodo locale...',
NODE_Title                      : 'Configura nodo personalizzato',
PARITY_AlreadyImported          : "È già stata importata una transazione con lo stesso hash.",
PARITY_GasLimitExceeded         : "Il costo della transazione eccede il limite gas corrente. Limite: {}, fornito: {}. Prova a ridurre il gas fornito.",
PARITY_InsufficientBalance      : "Fondi insufficienti. L'account dal quale stai provando ad inviare la transazione non ha abbastanza fondi. Richiesti {} ma presenti: {}.",
PARITY_InsufficientGasPrice     : "La commissione per la transazione è troppo bassa. Non soddisfa la commissione minima del tuo nodo (minima: {}, fornita: {}). Prova ad aumentare la commissione.",
PARITY_InvalidGasLimit          : "Il gas fornito supera il limite.",
PARITY_LimitReached             : "Ci sono troppe transazioni nella coda. La tua transazione è stata scartata per il superamento del limite. Prova ad aumentare la commissione.",
PARITY_Old                      : "Il nonce della transazione è troppo basso. Prova ad incrementare il nonce.",
PARITY_TooCheapToReplace        : "La commissione per la transazione è troppo bassa. Nella coda c'è un'altra transazione con lo stesso nonce. Prova ad aumentare la commissione o ad incrementare il nonce.",
PW_                             : 'Password ',
PW_Desc                         : 'This password * encrypts * your private key. This does not act as a seed to generate your keys. **You will need this password + your private key to unlock your wallet.**',
PW_Enter                        : 'Inserisci una password robusta (almeno 9 caratteri) ',
PW_Optional                     : 'Password (facoltativo): ',
SEND_Advanced                   : '+Avanzate',
SEND_O_Modal_Title              : 'WARNING! Do not go back online yet!',
SENDModal_Content_1             : 'Stai per inviare ',
SENDModal_Content_2             : 'all\'indirizzo ',
SENDModal_Content_3             : 'Sei sicuro di volerlo fare? ',
SENDModal_Content_4             : 'NOTA: Se ricevi un errore, molto probabilmente dovrai aggiungere ether al tuo conto per coprire il costo del gas necessario ad inviare i token. Il gas si paga in ether. ',
SENDModal_No                    : 'No, tiratemi fuori da qui! ',
SENDModal_OK                    : 'Okay, get me out of here! ',
SENDModal_Title                 : 'Attenzione! ',
SENDModal_Yes                   : 'Sì, sono sicuro! Esegui la transazione. ',
SIDEBAR_donate                  : 'Dona ',
SIDEBAR_donation                : 'MyEtherWallet è un servizio gratuito e open-source votato alla tua privacy e sicurezza. Più donazioni riceviamo, più tempo dedichiamo a creare nuove funzionalità, considerare i tuoi commenti, e darti ciò che vuoi. Siamo solo due persone che provano a cambiare il mondo. Ci aiuti? ',
SIDEBAR_Equiv                   : 'Valori equivalenti ',
SIDEBAR_thanks                  : 'GRAZIE!!! ',
SUCCESS_1                       : 'Indirizzo valido ',
SUCCESS_2                       : 'Portafoglio decodificato correttamente ',
SUCCESS_3                       : 'La transazione è stata inviata alla blockchain. Fai clic per vederla e controllare che sia stata inclusa in un blocco e non si siano verificati errori relativi al gas o all\'esecuzione del contratto.  TX Hash:  ',
SUCCESS_4                       : 'Il portafoglio è stato aggiunto correttamente ',
SUCCESS_5                       : 'File selezionato ',
SUCCESS_6                       : 'Ora sei connesso ',
SUCCESS_7                       : 'Firma del messaggio verificata',
SWAP_elapsed                    : "Tempo trascorso dall\'invio ",
SWAP_information                : "Il tuo riepilogo ",
SWAP_init_1                     : "Voglio scambiare i miei ",
SWAP_init_2                     : " per ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA                   : "Facciamolo! ", // or "Continue"
SWAP_order_CTA                  : "Invia ", // Please send 1 ETH...
SWAP_progress_1                 : "Ordine creato ",
SWAP_progress_2                 : "In attesa dei tuoi ", // Waiting for your BTC...
SWAP_progress_3                 : "ricevuti! ", // ETH Received!
SWAP_progress_4                 : "Invio dei tuoi {{orderResult.output.currency}} ",
SWAP_progress_5                 : "Ordine completato ",
SWAP_rates                      : "Tassi correnti ",
SWAP_rec_add                    : "Indirizzo di ricezione ",
SWAP_rec_amt                    : "Importo da ricevere ",
SWAP_ref_num                    : "Il tuo codice di riferimento ",
SWAP_start_CTA                  : "Avvia scambio ",
SWAP_time                       : "Tempo rimanente per l\'invio ",
SWAP_Title                      : 'Scambia ',
SWAP_unlock                     : "Sblocca il tuo portafoglio per inviare ETH o token direttamente da questa pagina. ",
SWAP_your_rate                  : "Il tuo tasso ",
TOKEN_AddCustom                 : 'Aggiungi altro token ',
TOKEN_Balance                   : 'Saldo token ',
TOKEN_Dec                       : 'Decimali ',
TOKEN_hide                      : 'Nascondi token ',
TOKEN_show                      : 'Mostra tutti i token ',
TOKEN_Symbol                    : 'Simbolo del token ',
TX_Broadcast                    : 'Broadcast Transaction',
TX_Broadcast_Desc               : 'Paste your signed transaction below &amp; press the button. A confirmation dialog showing your transaction details will be shown before it attempts to broadcast it to the network. Please double check how much of what coin to what address you are sending.',
TX_Cancel                       : 'Cancella la Transazione',
TX_CancelReplace                : 'Cancella o Sostituisci la Transazione',
TX_Details                      : 'Dettagli della Transazione',
TX_Generate                     : 'Genera transazione ',
TX_Hash                         : 'TX Hash',
TX_History                      : 'Storico transazioni ',
TX_Replace                      : 'Sostituisci la Transazione',
TX_Send_All                     : 'Invia l\'intero saldo ',
TX_Send_Desc                    : 'Enter the address of the account you will be sending from to get started. You will sign your transaction with your `private key` or `keystore file + password` right before you send.',
TX_Send_Short                   : 'Invia transazione ',
TX_Send_Title                   : 'Invia ether e token ',
TX_Sign                         : 'Firma transazione ',
TX_Sign_Offline                 : 'Sign Transaction Offline',
TX_Signed                       : 'Transazione firmata ',
TX_TXFee                        : 'TX Fee',
TX_TXFeeDesc                    : 'The TX Fee is paid to miners for including your TX in a block. Is is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)',
TX_Unsigned                     : 'Transazione grezza ',
TX_View                         : 'View Transaction Status',
TX_View_Short                   : 'View Transaction',
VIEWTX_Found                    : 'Pending Transaction Found',
VIEWTX_Found_1                  : 'Your transaction was located in the TX Pool of the node you are connected to. ',
VIEWTX_Found_2                  : 'It is currently pending (waiting to be mined). ',
VIEWTX_Found_3                  : 'There is a chance you can "cancel" or replace this transaction. Unlock your wallet below.',
VIEWTX_FoundOnChain             : 'Transaction Found',
VIEWTX_FoundOnChain_1           : 'Your transaction was successfully mined and is on the blockchain.',
VIEWTX_FoundOnChain_2           : '**If you see a red `( ! )`, a `BAD INSTRUCTION` or `OUT OF GAS` error message**, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.',
VIEWTX_FoundOnChain_3           : '**If you do not see any errors, your transaction was successfully sent.** Your ETH or Tokens are where you sent them. If you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it has been 24+ hours since you sent, please [contact that service](https://myetherwallet.groovehq.com/knowledge_base/topics/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do). Send them the *link* to your transaction and ask them, nicely, to look into your situation.',
VIEWTX_NotFound                 : 'Transazione Non Trovata',
VIEWTX_NotFound_1               : 'This TX cannot be found in the TX Pool of the node you are connected to.',
VIEWTX_NotFound_2               : 'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again. ',
VIEWTX_NotFound_3               : 'It could still be in the TX Pool of a different node, waiting to be mined.',
VIEWTX_NotFound_4               : 'Please use the dropdown in the top-right & select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.',
VIEWTX_Title                    : 'View Transaction',
VIEWWALLET_Subtitle             : 'Qui è possibile scaricare diverse versioni delle chiavi private e ristampare il portafoglio cartaceo. Potresti volerlo fare per  [importare il tuo conto in Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Se vuoi controllare il tuo saldo, ti consigliamo di utilizzare uno strumento per esplorare la *blockchain* come [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short       : 'Qui è possibile scaricare diverse versioni delle chiavi private e ristampare il portafoglio cartaceo. ',
WALL_                           : 'Portafoglio ',
WALL_Add                        : 'Aggiungi portafoglio ',
WALL_Create                     : 'Create Wallet ',
WALL_Create                     : 'Genera portafoglio ',
WALL_Edit                       : 'Modifica portafoglio ',
WALL_Edit_Short                 : 'Modifica ',
WALL_GenerateNew                : 'Genera un nuovo portafoglio ',
WALL_Hide                       : 'Nascondi informazioni portafoglio ',
WALL_Name                       : 'Nome portafoglio ',
WALL_Nickname                   : 'Nome portafoglio ',
WALL_Remove                     : 'Rimuovi ',
WALL_RemoveWal                  : 'Rimozione portafoglio: ',
WALL_Select                     : 'Seleziona un portafoglio: ',
WALL_Unlock                     : 'Sblocca portafoglio ',
WALL_Unlock_Short               : 'Sblocca ',
WALL_View                       : 'Informazioni portafoglio ',
WALL_View_Short                 : 'Mostra ',
WALL_Viewing                    : 'Dettagli portafoglio ',
WALL_walletViewCX               : 'I miei portafogli ',
WALL_WatchOnlyAccounts          : 'I tuoi conti osservati ',
WALL_Your                       : 'I tuoi portafogli ',
WARN_01                         : 'Controlla sempre l\'URL prima di accedere al tuo portafoglio o di crearne uno nuovo. Fai attenzione ai siti di phishing! ',
WARN_02                         : 'Sei arrivato qui da un link che ha riempito per te i campi indirizzo, importo, gas, dati o tipo di transazione (modalità di invio). Puoi cambiare queste informazioni prima di inviare. Sblocca il tuo portafoglio per iniziare. ',
WARN_03                         : 'Puoi aggiungere qualunque conto da "osservare" nella scheda dei portafogli senza caricare una chiave privata. Ciò ** non ** significa che avrai accesso a quel portafoglio, né che potrai trasferire gli Ether lì contenuti. ',
WARN_04                         : 'Assicurati di avere **dei backup esterni** di ogni portafoglio salvato qui. Ci sono molte cose che potrebbero causare la perdita dei dati di questa estensione di Chrome, come la disinstallazione e reinstallazione dell\'estensione. Questa estensione è un mezzo per accedere facilmente ai tuoi portafogli, **non** un modo di salvarli al sicuro. ',
WARN_05                         : 'Il tuo nodo deve utilizzare HTTPS per potertici collegare da MyEtherWallet.com. Puoi [scaricare il repository di MyEtherWallet ed eseguirlo in locale](https://github.com/kvhnuke/etherwallet/releases/latest) per collegarti ad altri tipi di nodo. Oppure, ottieni un certificato SSL gratuito tramite [LetsEncrypt](https://letsencrypt.org/)',
WARN_06                         : 'Attenzione! Stai per rimuovere il tuo portafoglio ',
WARN_07                         : 'Assicurati di aver **salvato la chiave privata e/o il file Keystore e la password** prima di rimuoverlo. ',
WARN_08                         : 'Se vorrai utilizzare questo portafoglio con MyEtherWallet CX in futuro, dovrai ri-aggiungerlo manualmente tramite la chiave privata/JSON e password. ',
WARN_09_A                       : 'Warning! You do not have enough funds to complete this swap',
WARN_09_B                       : 'Please add more funds to your wallet or access a different wallet',
x_Access                        : 'Accedi ',
x_Add                           : 'Add ',
x_Amount                        : 'Importo da inviare ',
x_Amount_short                  : 'Importo ',
x_Cancel                        : 'Annulla ',
x_Contact                       : 'Contatti ',
x_Continue                      : 'Continue',
x_Data                          : 'Dati ',
x_DataDesc                      : 'Facoltativo. I dati sono usati spesso nelle transazioni inviate ai contratti. ',
x_Download                      : 'Download ',
x_GasLimit                      : 'Limite gas ',
x_GasLimitDesc                  : 'Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.',
x_GasPrice                      : 'Prezzo gas ',
x_GasPriceDesc                  : 'Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `21 GWEI`.',
x_Help                          : 'Aiuto ',
x_Keystore                      : 'File Keystore (UTC / JSON · Consigliato · Crittografato) ',
x_Keystore2                     : 'File Keystore (UTC / JSON) ',
x_Keystore_Save                 : 'Salva il file del tuo portafoglio.   ',
x_KeystoreDesc                  : 'Questo file Keystore è compatibile con il formato usato da Mist, in modo da poterlo facilmente importare in futuro. È il file consigliato da scaricare e conservare. ',
x_Mnemonic                      : 'Frase mnemonica ',
x_Nonce                         : 'Nonce ',
x_NonceDesc                     : 'The nonce is the number of transactions sent from a given address. It ensures transactions are sent in order & not sent more than once.',
x_ParityPhrase                  : 'Frase di Parity ',
x_Print                         : 'Stampa portafoglio cartaceo ',
x_PrintDesc                     : 'Suggerimento Pro: Fai clic su stampa e salvalo come PDF, anche se non hai una stampante! ',
x_PrintShort                    : 'Stampa ',
x_PrivKey                       : 'Chiave privata (non crittografata) ',
x_PrivKey2                      : 'Chiave privata ',
x_PrivKeyDesc                   : 'Questa è la versione testuale non crittografata della tua chiave privata, il che significa che non serve una password. Se qualcuno trovasse la tua chiave privata non crittografata potrebbe avere accesso al tuo portafoglio senza una password. Per questa ragione di solito si consigliano le versioni crittografate. ',
x_ReadMore                      : 'Read More',
x_Save                          : 'Salva ',
z_TRANSLATE1                    : '[ugilio](https://www.myetherwallet.com/?gaslimit=21000&to=0x07932bc1c68c8ff188f4225e892178ab6d8c4eaa&value=0.1#send-transaction) ',
z_TRANSLATE2                    : '',
z_TRANSLATE3                    : '',
z_TRANSLATE4                    : '',
z_TRANSLATE5                    : '',
z_TRANSLATEDesc                 : 'Grazie ai nostri traduttori ',
z_TRANSLATEVersion              : '4.0'

/* Translation Info [YOUR_NAME](https://www.myetherwallet.com/?gaslimit=21000&to=YOUR_ADDRESS&value=0.1#send-transaction) · */

};

module.exports = it;
