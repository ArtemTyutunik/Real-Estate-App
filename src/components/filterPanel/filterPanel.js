import React from 'react';
import {Box, Flex, Select} from "@chakra-ui/react";

function FilterPanel({filters,updateQueries}) {
    return (
        <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
            {filters?.map((filter) => (
                <Box key={filter.queryName}>
                    <Select onChange={(e) => updateQueries({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} w='fit-content' p='2' >
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    );
}

export default FilterPanel;