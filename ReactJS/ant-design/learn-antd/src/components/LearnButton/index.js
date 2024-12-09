import { useState } from "react";
import { Button, Typography } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
const { Title } = Typography;

function LearnButton() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            const result = {
                code: 200,
                data: [],
            };
            if (result && result.code === 200) {
                setLoading(false);
            }
        }, 3000);
    };
    return (
        <>
            <Button
                type="primary"
                loading={loading}
                onClick={handleClick}
                disabled={loading}
                href="https://www.facebook.com/"
                size="large"
            >
                Nội dung
            </Button>

            <Button icon={<CaretRightOutlined rotate={45} spin={true} />}>
                Button
            </Button>

            <Title level={3}>h3. Ant Design</Title>
            <h3>Nội dung h3</h3>
        </>
    );
}

export default LearnButton;