import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import {useSuggestions} from "../rq_api/suggestionsAPI";

const InputsOutputs = () => {

    const [inputText, setInputText] = useState("");
    const { data: suggestions =[], isLoading } = useSuggestions(inputText);

    return (
        <View style={{ width: '95%'}}>
            <Text>
                {inputText}
            </Text>
            <TextInput
                keyboardType={"number-pad"}
                value={inputText}
                onChangeText={setInputText}
                style={styles.input}

            >
            </TextInput>
            <Text>
                {suggestions.join(",")}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
export default InputsOutputs;
