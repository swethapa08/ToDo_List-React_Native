import { useState } from 'react';
import { StyleSheet, Text, TextInput, View,TouchableOpacity,FlatList} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


console.log(Date.now().toString())

export default function ToDoPage({navigation}) {
  const[todo, setTodo]=useState("")
  const[todoList, setTodoList]=useState([])
  const[editedTodo, setEditedTodo]=useState(null);
  const handleAddTodo=()=>{
  setTodoList([...todoList, {id: Date.now().toString(), title:todo}])
  setTodo("");
  };
  const handleDeleteTodo=(id)=>{
  const updatedTodoList = todoList.filter((todo)=>todo.id!==id);
  setTodoList(updatedTodoList);
  };

  const handleEditTodo=(todo)=>{
    setEditedTodo(todo);
    setTodo(todo.title)
  }

  const handleUpdateTodo=()=>{
    const updatedTodos=todoList.map((item)=>{
      if(item.id === editedTodo.id){
        return{...item, title:todo}
      }
      return item
    }
    );
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };

  const renderTodos=({item, index})=>{
    return(
      <View>
      <View style={{backgroundColor:'#66B2BC', alignItems:'center', borderTopLeftRadius:20, borderTopRightRadius:20, marginTop:25, paddingHorizontal:15, paddingVertical:30}}>
        <Text style={{color:'#fff', fontWeight:'600', fontSize:18}}>{item.title}</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={()=>handleEditTodo(item)}>
          <View style={{flex:1,
          paddingHorizontal: 60,
          paddingRight:100,
          paddingVertical:8,
      backgroundColor: '#C5DEDB',
      borderBottomLeftRadius:10
      }}>
              <Text style={{color:'#482A92',
      fontWeight:'bold',
      fontSize:20,
      textAlign:'center'}}>Edit</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handleDeleteTodo(item.id)}>
          <View style={{paddingVertical:8,
          flex:1,
          paddingLeft:20,
          paddingRight:55,
          borderBottomRightRadius:10,
      backgroundColor: '#C5DEDB'}}>
              <Text style={{color:'#482A92',
      fontWeight:'bold',
      fontSize:20,
      alignItems:'flex-end',
      textAlign:'center'}}>           Delete</Text>
          </View>
      </TouchableOpacity>
  </View>
  </View>
    )
  };
    return(
      <View style={{backgroundColor:'#482A92', height:250, borderBottomEndRadius:200,  borderBottomLeftRadius:30}}>
      <SafeAreaView style={{marginHorizontal:30, marginVertical:30, height:5000}}>
        <View style={{bottom:0, flexDirection:'row', paddingHorizontal:80, paddingVertical:10, justifyContent:'center'}}>
          <View>
            <TextInput
              style={{
                width:280,
                borderRadius: 10,
                backgroundColor:'#C5DEDB',
                paddingHorizontal:15,
                paddingVertical:20,
              }}
              placeholder='Add a Task'
              value={todo}
              onChangeText={(userText)=>setTodo(userText)}
            />
          </View>
      
          {editedTodo ?(<TouchableOpacity style={{width:90, height:50, borderRadius:15, backgroundColor:'#75a3a3', alignItems:'center', paddingVertical:35}}        
          onPress={()=>handleUpdateTodo()}>
              <Text style={{color:'#482A92', fontWeight:'800', marginTop:25, position:'absolute'}}>SAVE</Text>
          </TouchableOpacity>):
          (
            <TouchableOpacity style={{width:90, height:50, borderRadius:15, backgroundColor:'#fff', alignItems:'center', paddingVertical:35}}        
          onPress={()=>handleAddTodo()}>
              <Text style={{color:'#482A92', fontWeight:'800', marginTop:25, position:'absolute'}}>ADD</Text>
          </TouchableOpacity>
          )
          }
        </View>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#fff', marginVertical:40, marginBottom:70}}>  TASK LIST
        </Text>
        <FlatList data={todoList} renderItem={renderTodos}></FlatList>
      </SafeAreaView>
      </View>
   )
}
const styles = StyleSheet.create[{
}]