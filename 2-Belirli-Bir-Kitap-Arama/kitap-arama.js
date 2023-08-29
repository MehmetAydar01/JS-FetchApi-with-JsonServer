/* Sahte bir API'dan gelen verileri işlemek için çeşitli işlemler yapabilirsiniz. Örnek olarak, bu sahte kitap verilerini alıp bir liste şeklinde görüntülemek veya belirli bir kitap aramak gibi işlemleri düşünebiliriz. İşte sahte verileri işlemek için bazı örnek işlemler: */

// 2. Belirli Bir Kitap Arama: Bu kod, belirli bir kitap ID'si ile sahte API'dan kitap arar ve sonucu konsola ve HTML'e yazdırır.

const apiUrl = 'http://localhost:3001/books';
const bookId = 3;

fetch(`${apiUrl}/${bookId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(book => {
        document.getElementById("searchBook").innerHTML = `${book.title} -- ${book.author}`;
        console.log('Aradiginiz Kitap: ', book);
    })
    .catch(error => {
        console.error('Hata:', error);
    })



