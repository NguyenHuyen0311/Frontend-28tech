import { FaAngry, FaAtom } from "react-icons/fa";

function MainContent() {
    let name = "Nguyễn Thị Huyền";
    const css = {
        // color: "red", 
        // backgroundColor: "blue"
    };
    
    return (
        <>
            <div className="box">
                <div className="test" style={css}>
                    Xin chào {name}!
                </div>
                <div className="test" style={css}>
                    Xin chào {name}!
                </div>
                <FaAngry style={{fontSize: "50px"}} />
                <FaAtom className="icon" />
            </div>

        </>
    )
};

export default MainContent;