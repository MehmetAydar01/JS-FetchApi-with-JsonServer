/* Tabii, sahte bir API üzerinde veri ekleme veya güncelleme işlemi yapmak için POST veya PUT HTTP metodlarını kullanabiliriz. Ancak unutmayın ki JSON Server, gerçek bir sunucu olmadığı için veri değişiklikleri yalnızca sahte verileri etkiler. İşte örnek veri ekleme ve güncelleme işlemleri: */

// 4. Veri Ekleme (POST): POST Methodu Kullanarak Veri Ekleme...
// Not: Fetch API kullanarak JSON Server üzerinde data ekleyen ve aynı datanın tekrar eklenmesini engelleyen bir örnek:


const apiUrl = 'http://localhost:3001/books';
const bookIdToUpdate = 15;

const updatedBook  = {
    title: 'Sefiller',
    author: 'Victor Hugo'
};

// Veritabanında(db.json dosyasi) zaten güncellenmişse hata dönecek
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        data.forEach(book => {
            const listItem = document.createElement("li");
            listItem.textContent = `${book.author} -- ${book.title}`;
            document.getElementById('book-list').appendChild(listItem);
        });
        const existingBook = data.find(book => book.id === bookIdToUpdate);
        if (!existingBook) {
            throw new Error('Book not found');
        } else if(existingBook.title !== updatedBook.title || existingBook.author !== updatedBook.author) {
            // Güncellenmiş değilse güncelleme yapılabilir
            fetch(`${apiUrl}/${bookIdToUpdate}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedBook)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Kitap Güncellendi:', data);
                })
                .catch(error => {
                    console.error('Hata:', error);
                });
        } else {
            console.log('Kitap zaten güncellenmiş.');
            document.getElementById('guncelData').innerHTML = 'Guncel Data: ' + updatedBook.author + " -- " + updatedBook.title;
        }
    })
    .catch(error => {
        console.error('Hata:', error);
    });




/* Bu örneklerde, fetch işlevi ile sahte API'ya POST veya PUT istekleri gönderiliyor. Content-Type başlığı ile verinin JSON formatında olduğunu belirtiyoruz. JSON.stringify ile veriyi JSON formatına çeviriyoruz. Dönen yanıtı JSON formatında alıp işleyebiliriz.

Burada öncelikle veritabanında(db.json) belirtilen kitap ID'sine sahip kitabın var olup olmadığını ve güncellenip güncellenmediğini kontrol eder. Eğer kitap zaten güncellenmişse, "Kitap zaten güncellenmiş." mesajını görüntüler. Eğer kitap güncellenmemişse, Fetch API kullanarak JSON Server'a PUT isteği gönderir ve kitabı günceller.

Böylece, veriyi sadece bir kez güncelleyebilir ve güncelleme işlemi başarılı olursa durdurabilirsiniz.

Ancak unutmayalım ki JSON Server, gerçek bir sunucu olmadığı için bu işlemler sadece sahte verileri etkiler. Gerçek bir sunucu üzerinde bu HTTP metodlarını kullanmak için gerçek bir sunucu ve veritabanı gerekecektir. */

