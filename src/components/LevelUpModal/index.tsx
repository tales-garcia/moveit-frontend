import React from 'react';
import { useChallenge } from '../../hooks/challenge';

import { Overlay } from './styles';

const LevelUpModal: React.FC = () => {
    const { level, toggleModal, isActive } = useChallenge();

    return isActive ? (
        <Overlay>
            <div>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo Level.</p>

                <button type="button" onClick={() => toggleModal(false)}><img src="icons/close.svg" alt="Fechar modal"/></button>
            </div>
        </Overlay>
    ) : null;
}

export default LevelUpModal;