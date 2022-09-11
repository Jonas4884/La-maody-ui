import { Table as TableContent, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TableProps } from '../../../types/proptypes'
import { useData } from '../../../utils/hooks/use-data';

export const Table = ({ fields, resource, showId }: TableProps) => {
  const [dataSet, setDataSet] = useState<any[]>([]);
  const navigate = useNavigate();
  const { getList } = useData();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await getList(resource);
        setDataSet(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);

  const navigateToEdit = (id: number) => {
    navigate(`/admin/${resource}/${id}`);
  }

  const renderData = useCallback(() => (
    dataSet.map((dataset) => {
      const keys = Object.keys(dataset);
      return (
        <Tr onClick={() => navigateToEdit(dataset.id)} _hover={{bg: 'blackAlpha.100', cursor: 'pointer'}}>
          {keys.map((k) => {
            const value = dataset[k as keyof typeof dataset];
            return (k !== 'id' || showId) && (
              <Td>{value}</Td>
            )
          })}
        </Tr>
      )
    })
  ), [dataSet]);

  return (
    <>
      <TableContainer bg={useColorModeValue("whiteAlpha.900", "blackAlpha.200")} borderRadius={4}>
        <TableContent variant='simple'>

          <Thead>
            <Tr>
              {fields.map((label) => (
                <Th>{label}</Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {renderData()}
          </Tbody>
        </TableContent>
      </TableContainer>
    </>
  )
}
