/* Sahte bir API'dan gelen verileri işlemek için çeşitli işlemler yapabilirsiniz. Örnek olarak, bu sahte kitap verilerini alıp bir liste şeklinde görüntülemek veya belirli bir kitap aramak gibi işlemleri düşünebiliriz. İşte sahte verileri işlemek için bazı örnek işlemler: */

// 3. Verileri Filtreleme ve Sıralama: Bu kod, verileri başlık bazında sıralar ve yazarı "Jack London" olan kitapları filtreler..

const apiUrl = 'http://localhost:3001/books';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const sortedBooks = data.sort((a,b) => a.title.localeCompare(b.title));
        console.log("Title'ları sıralamak A dan Z ye: ", sortedBooks);

        const filteredBooks = sortedBooks.filter(book => book.author === 'Jack London');
        console.log('Filtrelenmiş ve Sıralanmış Kitaplar:', filteredBooks);

        filteredBooks.forEach(bookValue => {
            const listItem = document.createElement("li");
            listItem.textContent = `${bookValue.title} -- ${bookValue.author}`;
            document.getElementById("filteredValues").appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Hata:', error);
    });



