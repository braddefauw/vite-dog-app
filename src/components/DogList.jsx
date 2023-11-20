import { useEffect, useState } from 'react';

const DogList = () => {
    const [dogImages, setDogImages] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/5')
        .then((response) => response.json())
        .then((data) => setDogImages(data.message));
    }, []);

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Random Dog Pictures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dogImages.map((dogImage, index) => (
                    <img 
                    key={index}
                    src={dogImage}
                    alt={`Dog ${index + 1}`}
                    className="rounded-md shadow-md"
                    />
                ))}
            </div>
        </div>
    )
}

export default DogList;