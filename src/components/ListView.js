import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Card } from "react-bootstrap";
import '../components/comp.css'

const ListView = () => {
    const [news, setNews] = useState({ data: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://api.first.org/data/v1/news',
            );

            setNews(result.data);
        };

        fetchData();
    }, []);
    const handleRemove=(id) => {
        const newList = news.filter((item) => item.id !== id);
        setNews(newList)
      }

    return (
        <div className="container"  >
                <Row style={{ justifyContent: 'center' }}>
                    {news.data.map(item => (
                        <div key={item.id}> 
                        <Card className="list" id="name">
                            <a href={item.link} style={{textDecoration:'none'}}>
                            <p class="list-header">{item.title}</p>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    <p className="content">{item.summary}</p>
                                    <p className="date">{item.published}</p>
                                </Card.Text>
                            </Card.Body>
                            </a>
                        </Card>
                        <button onClick={() => handleRemove(item.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="red" class="bi bi-x-lg" className="list-icon">
                                <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                            </svg>
                        </button>
                        </div>
                        ))}
                </Row>
        </div>

    );
}

export default ListView;