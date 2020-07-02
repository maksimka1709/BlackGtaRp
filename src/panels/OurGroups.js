import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Cell, Avatar, List, Header, Group, Card} from '@vkontakte/vkui';
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
        name: 'ЧЁРНЫЙ GTARP',
        avatar: 'https://sun9-64.userapi.com/Qww1fkk2Gpqj1DrACw_MIzhzM13IwKvYUncKAQ/5ivbIpzrUpE.jpg?ava=1',
        desc: 'Основное сообщество'
    },
    {
        name: 'РАЗДАЧИ ОТ ЧЁРНОГО GTARP',
        avatar: 'https://sun9-64.userapi.com/Qww1fkk2Gpqj1DrACw_MIzhzM13IwKvYUncKAQ/5ivbIpzrUpE.jpg?ava=1',
        desc: 'Раздачи и покупка аккаунтов'
    },
];

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Наши группы
		</PanelHeader>
        <Group header={<Header mode="secondary">RT Groups</Header>}>
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
