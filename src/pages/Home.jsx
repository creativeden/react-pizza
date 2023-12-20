import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import { SearchContext } from '../App';

const Home = () => {
    const { searchValue } = React.useContext(SearchContext);
    const [ items, setItems ] = React.useState([]);
    const [ isLoading, serIsLoading ] = React.useState(true);
    const [ categoryId, setCategoryId ] = React.useState(0);
    const [ sortType, setSortType ] = React.useState({
        name: 'популярности',
        sortProperty: 'rating'
    });

    React.useEffect(() => {
        serIsLoading(true);

        const sortBy = sortType.sortProperty;
        // const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `title=*${searchValue}` : '';

        fetch(
            `https://c5cb00968e032a16.mokky.dev/items?${search}&${category}&sortBy=${sortBy}`)
            .then((res) => res.json())
            .then(arr => {
                setItems(arr);
                serIsLoading(false);
            });
    }, [categoryId, sortType, searchValue]);

    const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

    const skeletons = [...new Array(9)].map((_, index) => <Skeleton key={index} />);

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
                <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        </>
    );
}

export default Home;