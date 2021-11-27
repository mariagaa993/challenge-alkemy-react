import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const useDelete = (heroes, setTeam) => {
    const deleteHero = (hero) => {
		const newArrayHeroes = heroes.filter(h => h.id !== hero.id);
        setTeam(newArrayHeroes);
	};

    return [deleteHero];
}

export const useAdd = () => {
    const [team, setTeam] = useState([]);
    
    const addHero = (hero) => {
        const id = team.findIndex(h => h.id === hero.id);
        if(team.length >= 6) {
            alert('You cannot add more than 6 characters');
        } else if(id === -1) {
            setTeam(team.concat(hero));
            alert('It has been added successfully!')
        } else {
            alert('Do not repeat!');
        }
    } 

    useEffect(() => {
        let data = localStorage.getItem('team');
        if(data != null) {
            setTeam(JSON.parse(data))
        } else {
            setTeam([]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('team', JSON.stringify(team));
    }, [team]);

    return [addHero, team, setTeam];
}

export const useDetail = () => {
    const history = useHistory();

    const detail = (hero) => {
        localStorage.setItem('hero', JSON.stringify(hero))
        history.push(`${hero.id}/info`)
    }

    return [detail];
}

export const useBack = () => {
    const history = useHistory();

    const back = () => {
        history.goBack()
    }

    return [back];
}
