import React, { useState } from 'react';
import Button from '../../core/components/Button';
import { ProfileResponse } from '../../core/utils/Profile';
import { makeRequest } from '../../core/utils/request';
import ProfileCard from './ProfileCard';
import ProfileLoader from './ProfileLoader';
import './styles.css';

type FormState = {
    username: string;
}

const Search = () => {
    const [profileResponse, setProfileResponse] = useState<ProfileResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [isReturned, setIsReturned] = useState(false);
    
    const [formData, setFormData] = useState<FormState>({
        username: ''
    });

    type FormEvent = React.ChangeEvent<HTMLInputElement>;

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        makeRequest({ url: formData.username })
            .then(response => {
                setProfileResponse(response.data);
                setIsReturned(true);
            })
            .catch((error) => {
                setIsReturned(false)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const verificaValidade = (url : string) => {
        return(
            url != null ? true : false
        )
    } 

    return (
        <div className="page-container">
            <div className="search-container">
                <h2 className="search-title">Encontre um perfil Github</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        value={formData.username}
                        name="username"
                        type="text"
                        className="form-input"
                        onChange={handleOnChange}
                        placeholder="Usuário GitHub"
                    />
                    <div className="form-actions">
                        <Button text="Encontrar" />
                    </div>
                </form>
            </div>
            {isLoading && (<div className="content-response">
                <ProfileLoader />
            </div>)}
            {isReturned && verificaValidade(profileResponse?.html_url!) && (<ProfileCard profile={profileResponse!} />)}
        </div>
    )
}

export default Search;