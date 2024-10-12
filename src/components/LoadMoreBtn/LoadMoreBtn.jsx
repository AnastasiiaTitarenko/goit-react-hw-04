import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, disabled }) => {
    return (
        < button className = {css.button} onClick = { onClick } disabled = { disabled } >
            LoadMoreBtn
        </button>
    );
};

export default LoadMoreBtn;