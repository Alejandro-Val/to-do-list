function ItemsLeft({total = 0}) {
    return (
        <p className="text-sm text-gray-400">
            {`${total} Tasks left`}
        </p>
    )
}

export default ItemsLeft
