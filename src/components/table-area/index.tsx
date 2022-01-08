import React from 'react';
import * as S from './styled';
import {Item} from '../../types/Item'
import { TableItem } from '../table-item';

type Props = {
	list : Item[]
}

const TableArea = ({list}: Props) => {
	return (
		<S.Container>
			<thead>
				<tr>
					<S.ContainerColumn width={100}>Data</S.ContainerColumn>
					<S.ContainerColumn width={130}>Categoria</S.ContainerColumn>
					<S.ContainerColumn>Titulo</S.ContainerColumn>
					<S.ContainerColumn width={150}>Valor</S.ContainerColumn>
				</tr>
			</thead>
			<tbody>
				{console.log(list)}
			{list.map((item, index)=>(
                    <TableItem key={index} item={item} />
                ))}
			</tbody>
		</S.Container>
	);
};

export default TableArea;
