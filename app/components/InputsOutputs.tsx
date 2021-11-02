import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput, ScrollView, KeyboardAvoidingView
} from 'react-native';
import {useSuggestions} from "../rq_api/suggestionsAPI";
import {Card, Block, Input} from 'galio-framework'
import theme from "../theme";
import {useFilteredSuggestions} from "../rq_api/filteredSuggestionsAPI";

const InputsOutputs = () => {

    const [inputText, setInputText] = useState("");
    const {data: suggestions = [], isLoading} = useSuggestions(inputText);
    const {data: suggestionsFiltered = [], isLoading: isLoadingFiltered} = useFilteredSuggestions(inputText);

    return (
        <Block safe flex style={{ backgroundColor: theme.COLORS.WHITE }}>
            <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
                <Block >
                    <Card flex borderless title="Resco exam" titleColor={theme.COLORS.FACEBOOK} shadowColor={theme.COLORS.BLACK}>
                        <Block row middle>
                            <Input
                                placeholder="Numbers"
                                style={{borderColor: theme.COLORS.FACEBOOK}}
                                type="number-pad"
                                textContentType={"telephoneNumber"}
                                value={inputText}
                                onChangeText={setInputText}
                            >
                            </Input>
                        </Block>
                        <Block row middle>
                            <ScrollView style={styles.scrollView}>
                                <Text
                                    numberOfLines={25}
                                    style={styles.webSuggestion}>
                                    {suggestions.join(", ")}
                                </Text>
                            </ScrollView>
                        </Block>
                        <Block row middle>
                            <ScrollView style={styles.scrollView}>
                                <Text>{"Filtered"}</Text>
                                <Text
                                    numberOfLines={25}
                                    style={styles.webSuggestion}>
                                    {suggestionsFiltered.join(", ")}
                                </Text>
                            </ScrollView>
                        </Block>

                </Card>
                </Block>
            </KeyboardAvoidingView>
        </Block>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 220,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: "center"
    },

    webSuggestion: {
        borderWidth: 1,
        minHeight: 30,
        borderColor: 'blue',
        fontSize: 14,
        width: 320,
        margin:15,
        textAlign: "center"
    },
    scrollView: {
        marginHorizontal: 5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: theme.SIZES.BASE * 0.3,
        paddingHorizontal: theme.SIZES.BASE,
        backgroundColor: theme.COLORS.WHITE,
    },
});
export default InputsOutputs;
