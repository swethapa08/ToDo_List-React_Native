import { StyleSheet, Text, View, Image} from "react-native";
import FlatButton from "../shared/button";
export default function Start({navigation}) {
    return(
        <View style={{marginHorizontal: 30, marginVertical: 60}}>
        <View style={{alignItems:"center"}}>
          <Image source={require('../assests/images/image1.png')}
          style={{width:320, height:320, marginTop:60}}/>
        </View>
        <Text style={{textAlign:"center", color:"#000", fontSize:25, fontWeight:'bold'}}> Get Organized Your List</Text>
        <Text style={{textAlign:"center", color:"#7B7D7C", fontSize:18, marginVertical:20}}> A list of tasks that an individual needs to complete or accomplish.</Text>
        <FlatButton onPress={()=>navigation.navigate("ToDoPage")}/>
    </View>
    )
}
const styles = StyleSheet.create[{}]
