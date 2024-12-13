import { useEffect, useState } from "react";
import { getAnswersByUserId } from "../../services/answersService";
import { getListTopic } from "../../services/topicService";
import { Link } from "react-router-dom";

function Answers() {
    const [dataAnswers, setDataAnswers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const answersByUserId = await getAnswersByUserId();
            const topics = await getListTopic();
            // console.log(answersByUserId);
            // console.log(topics);

            let result = [];
            for (let i = 0; i < answersByUserId.length; i++) {
                // console.log(answersByUserId[i]);
                // console.log(Number(answersByUserId[i].topicId));
                // console.log(topics[i].id);
                result.push({
                    ...answersByUserId[i],
                    ...topics.find(item => Number(item.id) === Number(answersByUserId[i].topicId))
                })
            }
            // console.log(result);
            setDataAnswers(result.reverse());
        }
        fetchApi();
    }, []);

    // console.log(dataAnswers);

    return (
        <>
            <h2>Danh sách bài đã luyện tập</h2>
            {dataAnswers.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên chủ đề</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAnswers.map((item, index) => (
                            <tr key={`${item.id}-${item.topicId}-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={"/result/" + item.id}>Xem chi tiết</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Answers;