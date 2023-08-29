/* Sahte bir API'dan gelen verileri işlemek için çeşitli işlemler yapabilirsiniz. Örnek olarak, bu sahte kitap verilerini alıp bir liste şeklinde görüntülemek veya belirli bir kitap aramak gibi işlemleri düşünebiliriz. İşte sahte verileri işlemek için bazı örnek işlemler: */

// 1. Veriyi Liste Olarak Görüntüleme: Bu kod, sahte kitap verilerini alıp HTML içinde bir liste olarak görüntüler.

const apiUrl = 'http://localhost:3001/books';

fetch(apiUrl)
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .then(data => {
        const bookList = document.getElementById('book-list');
        data.forEach(book => {
            const listItem = document.createElement("li");
            listItem.textContent = `${book.title} -- ${book.author}`;
            bookList.appendChild(listItem);
        });
    }).catch(error => {
        console.error('Hata:', error);
    })