# 🔗 Guida: Come Aggiungere Link Amazon con Tracking ID

## ⚠️ IMPORTANTE: Devi Aggiungere Link Amazon REALI

Amazon ha rifiutato il tuo account perché **non ci sono link affiliati con il tuo tracking ID**.
Devi aggiungere link Amazon reali ai prodotti recensiti.

## Il Tuo Tracking ID Amazon

Il tuo Amazon Associate Tag è: **`cringejon07-21`**

## 📋 Passo 1: Trova il Prodotto su Amazon

1. Vai su [Amazon.it](https://amazon.it)
2. Cerca il prodotto che hai recensito (es. "Dell XPS 15")
3. Apri la pagina del prodotto
4. Copia l'**ASIN** (codice prodotto univoco)
   - Lo trovi nella sezione "Dettagli prodotto"
   - Esempio: `B0BW5SRGF8`

## 🔧 Passo 2: Crea il Link Affiliato

### Metodo 1: Link Diretto con Tag

Formato del link:
```
https://www.amazon.it/dp/ASIN?tag=cringejon07-21
```

Esempio reale:
```
https://www.amazon.it/dp/B0BW5SRGF8?tag=cringejon07-21
```

### Metodo 2: Usa SiteStripe (Consigliato)

1. Accedi al tuo account Amazon Associates
2. Vai su Amazon.it (rimani loggato)
3. Cerca il prodotto
4. Vedrai la barra **SiteStripe** in alto
5. Clicca "Ottieni link" → "Link breve"
6. Copia il link (avrà già il tuo tag)

### Metodo 3: Link Builder

1. Vai su [Amazon Associates](https://affiliate-program.amazon.it)
2. Menu → "Product Linking" → "Product Links"
3. Cerca il prodotto per nome o ASIN
4. Clicca "Get Link"
5. Copia il link generato

## 📝 Passo 3: Sostituisci i Placeholder

### Esempio: Laptop Dell XPS 15

**PRIMA (generico - NON FUNZIONA):**
```html
<a href="#" class="btn">Vedi su Amazon</a>
```

**DOPO (con tracking - FUNZIONA):**
```html
<a href="https://www.amazon.it/dp/B0BW5SRGF8?tag=cringejon07-21"
   class="btn"
   target="_blank"
   rel="nofollow noopener">
   Vedi su Amazon →
</a>
```

## 🎯 Dove Aggiungere i Link

### In OGNI Pagina di Recensione

Cerca questa sezione in ogni file HTML di recensione:

```html
<h2>1. Dell XPS 15 - Il Migliore in Assoluto</h2>
<div class="rating">★★★★★ 4.8/5</div>
<p>Descrizione prodotto...</p>

<!-- AGGIUNGI QUI IL LINK -->
<p style="margin: 2rem 0;">
    <a href="https://www.amazon.it/dp/ASIN-QUI?tag=cringejon07-21"
       class="btn"
       target="_blank"
       rel="nofollow noopener">
       🛒 Vedi Dell XPS 15 su Amazon
    </a>
</p>
```

### File da Modificare

1. **laptop-professionisti.html**
   - Dell XPS 15
   - MacBook Pro 14" M3
   - Lenovo ThinkPad X1 Carbon

2. **cuffie-wireless.html**
   - Sony WH-1000XM5
   - Bose QuietComfort Ultra
   - Apple AirPods Max
   - Sennheiser Momentum 4

3. **smartphone-flagship.html**
   - iPhone 15 Pro Max
   - Samsung Galaxy S24 Ultra
   - Google Pixel 8 Pro
   - Xiaomi 14 Ultra

4. **smartwatch-fitness.html**
   - Apple Watch Series 9
   - Garmin Forerunner 965
   - Samsung Galaxy Watch 6
   - Polar Vantage V3

5. **fotocamere-mirrorless.html**
   - Sony A7R V
   - Canon EOS R5
   - Nikon Z8
   - Fujifilm X-T5
   - Panasonic Lumix S5 II

6. **monitor-4k.html**
   - Dell UltraSharp U2723DE
   - LG 27UP850-W
   - ASUS ProArt PA279CRV
   - Samsung Odyssey G7 28"
   - BenQ SW270C

## ✅ Checklist Finale

Prima di ri-inviare la richiesta ad Amazon:

- [ ] Ho aggiunto link Amazon REALI (non placeholder "#")
- [ ] Ogni link contiene il mio tracking ID: `cringejon07-21`
- [ ] Ho almeno 3-5 link affiliati per pagina di recensione
- [ ] I link aprono in nuova tab (`target="_blank"`)
- [ ] Ho aggiunto `rel="nofollow noopener"` per SEO
- [ ] I link funzionano (li ho testati cliccandoci)

## 🎨 Template Completo da Copiare

```html
<!-- Dopo la descrizione del prodotto, aggiungi: -->

<div style="background: #f0f8ff; padding: 1.5rem; border-radius: 8px; margin: 2rem 0; text-align: center;">
    <p style="margin-bottom: 1rem; font-size: 1.1rem;">
        <strong>Interessato a questo prodotto?</strong>
    </p>
    <a href="https://www.amazon.it/dp/ASIN-QUI?tag=cringejon07-21"
       class="btn"
       target="_blank"
       rel="nofollow noopener"
       style="display: inline-block; font-size: 1.1rem; padding: 1rem 2rem;">
       🛒 Vedi su Amazon.it
    </a>
    <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
        Link affiliato Amazon - Supporti il blog senza costi extra
    </p>
</div>
```

## 🚨 Errori Comuni da Evitare

1. ❌ **Link senza tracking ID**
   ```
   https://www.amazon.it/dp/B0BW5SRGF8  ← SBAGLIATO!
   ```

2. ❌ **Tag errato**
   ```
   ?tag=wrong-tag-21  ← SBAGLIATO!
   ```

3. ❌ **Placeholder generico**
   ```html
   <a href="#">Vedi su Amazon</a>  ← SBAGLIATO!
   ```

4. ✅ **Link CORRETTO**
   ```
   https://www.amazon.it/dp/B0BW5SRGF8?tag=cringejon07-21
   ```

## 📊 Verifica che Funzioni

1. Clicca sul link che hai aggiunto
2. Guarda la URL nella barra del browser
3. Deve contenere `?tag=cringejon07-21` o `associate-id=cringejon07-21`
4. Se Amazon è loggato, vedrai "Acquistando tramite questo link supporti [tuo nome]"

## 🎯 Prossimi Passi

1. Cerca su Amazon.it OGNI prodotto che hai recensito
2. Ottieni l'ASIN o usa SiteStripe per generare link
3. Aggiungi i link nelle rispettive pagine HTML
4. Testa che tutti i link funzionino
5. Deploya il sito aggiornato
6. Aspetta 24-48h che Amazon indicizzi il sito
7. Ri-invia la richiesta ad Amazon Associates

## 💡 Consiglio Finale

Aggiungi **almeno 2-3 link per prodotto** in posizioni diverse:
- Uno subito dopo il titolo del prodotto
- Uno dopo i pro/contro
- Uno nella conclusione

Questo dimostra ad Amazon che stai realmente promuovendo prodotti.

---

**Ricorda:** Amazon controlla MANUALMENTE il sito. Se non vedono link affiliati con il tuo tag,
rifiuteranno di nuovo. È ESSENZIALE aggiungere link reali!
