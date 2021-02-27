import React, { useCallback, useEffect } from 'react';
import { useChallenge } from '../../hooks/challenge';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

import { Overlay } from './styles';

const LevelUpModal: React.FC = () => {
    const { level, toggleModal, isActive } = useChallenge();

    return (
        <AnimatePresence>
            {isActive ? (
                <Overlay
                    variants={{
                        show: {
                            opacity: 1
                        },
                        hide: {
                            opacity: 0
                        }
                    }}
                    animate="show"
                    exit="hide"
                    initial="hide"
                >
                    <motion.div
                        variants={{
                            show: {
                                left: '0%',
                                opacity: 1
                            },
                            hide: {
                                left: '-10%',
                                opacity: 0
                            }
                        }}
                        transition={{ duration: 0.2 }}
                        exit="hide"
                        animate="show"
                        initial="hide"
                    >
                        <header>{level}</header>

                        <strong>Parabéns</strong>
                        <p>Você alcançou um novo Level.</p>

                        <button type="button" onClick={() => toggleModal(false)}><img src="icons/close.svg" alt="Fechar modal" /></button>
                    </motion.div>
                </Overlay>
            ) : null}
        </AnimatePresence>
    );
}

export default LevelUpModal;