import React from 'react';
import dayjs from 'dayjs';
import Button from '../../../core/components/Button';
import { ProfileResponse } from '../../../core/utils/Profile';
import './styles.css';

type Props = {
    profile: ProfileResponse;
}

const ProfileCard = ({ profile }: Props) => (
    <div className="container-profile">
        <div className="container-informations">
            <div className="container-image">
                <img src={profile.avatar_url} alt="Profile" className="profile-card-image" />
            </div>
            <div className="principal-informations">
                <div className="smaller-informations">
                    <p className="public-repository">{`Repositórios públicos: ${profile.public_repos}`}</p>
                    <p className="followers">{`Seguidores: ${profile.followers}`}</p>
                    <p className="following">{`Seguindo: ${profile.following}`}</p>
                </div>
                <div className="container-data">
                    <h2 className="data-title">Informações</h2>
                    <div className="data-informations">
                        <div className="data-information-container">
                            <h4 className="data-informations-topic">Empresa: </h4>
                            <p className="data-topic-value">{`${profile.company}`}</p>
                        </div>
                    </div>
                    <div className="data-informations">
                        <div className="data-information-container">
                            <h4 className="data-informations-topic">Website/Blog: </h4>
                            <p className="data-topic-value">{`${profile.blog}`}</p>
                        </div>
                    </div>
                    <div className="data-informations">
                        <div className="data-information-container">
                            <h4 className="data-informations-topic">Localidade: </h4>
                            <p className="data-topic-value">{`${profile.location}`}</p>
                        </div>
                    </div>
                    <div className="data-informations">
                        <div className="data-information-container">
                            <h4 className="data-informations-topic">Membro desde: </h4>
                            <p className="data-topic-value">{dayjs(profile.created_at).format('DD/MM/YYYY')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href={`${profile.html_url}`} target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
            <div className="button-position">
                <Button text="Ver Perfil" />
            </div>
        </a>
    </div>
)


export default ProfileCard;