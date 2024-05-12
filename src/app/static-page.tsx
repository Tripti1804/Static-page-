import { useEffect, useState } from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const StaticPage: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((data: Post[]) => setData(data));
    }, []);

    return (
        <div>
            <h1>Static Page</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default StaticPage;
