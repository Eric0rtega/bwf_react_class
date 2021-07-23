export const ParentComponent = (props) => {
    return (
        <div>
            <h1>I am the parent.</h1>
            { props.children }
        </div>
    )
}