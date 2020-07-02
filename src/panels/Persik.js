import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Cell, Avatar, List, Header, Group} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import persik from '../img/persik.png';
import './Persik.css';

const osName = platform();

const bots = [
    {
        name: 'Никита Конев',
        avatar: 'https://sun9-46.userapi.com/c857532/v857532854/25de3/zv-bh73WI_g.jpg?ava=1',
        desc: 'Rivers'
    },
    {
        name: 'Руслан Гаджиев',
        avatar: 'https://sun9-14.userapi.com/Uebazij-w7YQEVuNoBVzZdMydfZCKXTowhEvCQ/2qQal_YM4IA.jpg?ava=1',
        desc: 'ЧСник'
    },
    {
        name: 'Максим Дёмин',
        avatar: 'https://sun9-26.userapi.com/c855520/v855520161/21b4cd/AZ2osKzhnL8.jpg?ava=1',
        desc: 'Черный Gangster'
    },
    {
        name: 'Александр Владимиров',
        avatar: 'https://sun9-2.userapi.com/c850416/v850416844/10a0e1/pAmwHvvkiWU.jpg?ava=1',
        desc: 'developer'
    },
];

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Наша команда
		</PanelHeader>
        <Group header={<Header mode="secondary">RT Team</Header>}>
        <List>
                    {bots.map((bot, index) => (
                        <Cell
                            key={index}
                            description={bot.desc}
                            before={<Avatar size={40} src={bot.avatar}/>}
                        >
                            {bot.name}
                        </Cell>
                    ))}
                </List>
        </Group>        
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
