function Content(props) {
    const { text, number, active } = props;
    // console.log(props);
    // console.log(props.text);

    // let classActive = "";
    // if(props.active) {
    //     classActive = "box--active";
    // }
    
    return (
        <>
            {/* <div className={"box " + classActive}>
                {props.text} - {props.number}
            </div> */}
            <div className={"box " + (active ? "box--active" : "")}>
                {text} - {number}
            </div>
        </>
    )
};

export default Content;