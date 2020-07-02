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

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Как получить аккаунт?
		</PanelHeader>
        <Group header={<Header mode="secondary">Как получить аккаунт?</Header>}>
        <Cell>1. Мы создаем пост с заданием в этой группе. </Cell>
        <Cell>2. Вы его выполняете и пишите в СМС нашего сообщества слово "аккаунт". </Cell>
        <Cell>3. Далее наш бот проверяет выполненное вами задание(в основном это поставить лайк, оставить комментарий разного характера), и моментально высылает вам рандомный аккаунт.</Cell>
	   </Group>
       <Group header={<Header mode="secondary">Какой минимальный уровень у этих аккаунтов?</Header>}>
       <Cell>В нашей базе нет аккаунтов 1-2 уровня, все аккаунты строго от 3 до не определенного.</Cell>
       </Group>
       <Group header={<Header mode="secondary">Что делать, если аккаунт нерабочий?</Header>}>
       <Cell>Если аккаунт оказался нерабочим, не стоит переживать, такое бывает, но не часто. Таких заданий будет много, в любом случае получите - достаточное кол-во аккаунтов.</Cell>
       </Group>
        <Group header={<Header mode="secondary">Важно</Header>}>
        <Cell>Перед тем как написать боту, ОТКРОЙТЕ ПРОФИЛЬ - закрытым профилям аккаунты бот не дает.</Cell>
        </Group>
    </Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
