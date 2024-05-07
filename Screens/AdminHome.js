import { View ,Text} from "react-native";




export default function AdminHome({ navigation, route }) {

    const {value} = route.params;
    return (
        <View>
            <Text>You are admin</Text>
            <Text>Your email is: {value}</Text>
        </View>
    );


}