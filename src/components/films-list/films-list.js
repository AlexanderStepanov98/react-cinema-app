import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import api from '../../services/cinemaAPI';
import {updateSelectedMovie} from "../../actions/actions";
import FilmsListItem from '../films-list-item/films-list-item';

import styles from './films-list.css';

class FilmsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [
                {
                    duration: 240,
                    id: 46184,
                    rating: 9.25,
                    title: "Британский театр в кино: Гамлет",
                    title_orig: "British theater in cinema - Hamlet",
                    url: "https://kino-teatr.ua/film/46184.phtml",
                    votes: 8,
                    year: 2015,
                    poster: 'https://api.kino-teatr.ua/public/film/46184/poster?width=300&height=400&ratio=1',
                },
                {
                    duration: 120,
                    id: 51017,
                    rating: 0,
                    title: "Электра / Орест",
                    title_orig: "Electra / Orestes",
                    url: "https://kino-teatr.ua/film/51017.phtml",
                    votes: 0,
                    year: 2019,
                    poster: 'https://api.kino-teatr.ua/public/film/51017/poster?width=300&height=400&ratio=1',
                },
                {
                    duration: 100,
                    id: 49930,
                    rating: 3.871795,
                    title: "Искусство обмана",
                    title_orig: "Lying and Stealing",
                    url: "https://kino-teatr.ua/film/49930.phtml",
                    votes: 117,
                    year: 2019,
                    poster: 'https://api.kino-teatr.ua/public/film/49930/poster?width=300&height=400&ratio=1',
                },
                {
                    duration: 86,
                    id: 50315,
                    rating: 8.232142,
                    title: "Секреты домашних животных 2",
                    title_orig: "The Secret Life of Pets 2",
                    url: "https://kino-teatr.ua/film/50315.phtml",
                    votes: 280,
                    year: 2019,
                    poster: 'https://api.kino-teatr.ua/public/film/50315/poster?width=300&height=400&ratio=1',
                },
                {
                    duration: 106,
                    id: 50606,
                    rating: 4.8488374,
                    title: "Аннабель 3",
                    title_orig: "Annabelle Comes Home",
                    url: "https://kino-teatr.ua/film/50606.phtml",
                    votes: 86,
                    year: 2019,
                    poster: 'https://api.kino-teatr.ua/public/film/50606/poster?width=300&height=400&ratio=1',
                },
                {
                    duration: 93,
                    id: 49967,
                    rating: 7.8714285,
                    title: "Водитель для копа",
                    title_orig: "Stuber",
                    url: "https://kino-teatr.ua/film/49967.phtml",
                    votes: 140,
                    year: 2019,
                    poster: 'https://api.kino-teatr.ua/public/film/49967/poster?width=300&height=400&ratio=1',
                },
                {
                    duration: 105,
                    id: 49904,
                    rating: 0,
                    title: "Акрам Хан: Жизель",
                    title_orig: "Akram Khan's Giselle",
                    url: "https://kino-teatr.ua/film/49904.phtml",
                    votes: 0,
                    year: 2018,
                    poster: 'https://api.kino-teatr.ua/public/film/49904/poster?width=300&height=400&ratio=1',
                },
                {
                    duration: 100,
                    id: 48754,
                    rating: 6.188034,
                    title: "История игрушек 4",
                    title_orig: "Toy Story 4",
                    url: "https://kino-teatr.ua/film/48754.phtml",
                    votes: 117,
                    year: 2019,
                    poster: 'https://api.kino-teatr.ua/public/film/48754/poster?width=300&height=400&ratio=1',
                }
            ]
        }
    }

    componentWillMount() {
        const { cityId } = this.props;
        api.getDistributionsByCityId(cityId)
            .then(resp => {
                console.log(resp);
                this.setState({films: resp});
            });
    }

    render() {
        const { container, cinemaTitle, filmsList, filmsListItem } = styles;

        const films = this.state.films.map(film => {
            return (
                <li className={filmsListItem}
                    key={film.id}>
                    <FilmsListItem {...film}
                                   onClick={this.setFilmIdToStore(film.id)}>
                    </FilmsListItem>
                </li>
            )
        });
        return (
            <div className={container}>
                <h2 className={cinemaTitle}>
                    Мультиплекс IMAX Dafi
                </h2>
                <ol className={filmsList}>
                    {films}
                </ol>
            </div>
        )
    }

    setFilmIdToStore(filmId) {
        this.props.updateSelectedMovie(filmId);
    }
}

const mapStateToProps = ({ cityId }) => {
    return { cityId };
};

const mapDispatchToProps = { updateSelectedMovie };

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);
