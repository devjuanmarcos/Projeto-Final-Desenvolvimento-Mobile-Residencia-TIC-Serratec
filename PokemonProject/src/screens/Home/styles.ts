import { StyleSheet, Platform } from "react-native";
import { shadow } from "react-native-paper";

const styles = StyleSheet.create({
<<<<<<< HEAD


    container: {

        flex: 1,
        backgroundColor: '#000',
        padding:0,
       
    },
    header:{
        
        margin:10,
        marginTop:40,
        paddingTop: 5,
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        
    },
    headerButton:{

        alignItems:'center',
        display:'flex',
        
    },
    boxButton:{
       
        borderRadius:20,
        borderBottomRightRadius:10,
        height:300,
        width:'90%',
        shadowOpacity: 0.5,
        elevation: 50,
        shadowRadius: 1 ,
        shadowOffset : { width: 57, height: 13},
        margin:10,
        
        
    },
    button:{
        
        height:130,
        width:'100%',
        shadowColor:'#000000',
        backgroundColor:'#e3e8ec',
        borderTopWidth:10,
        position:'relative',
        borderTopColor:'#c22',
        alignItems:"center",
        borderBottomEndRadius:10,
        borderBottomLeftRadius:10
    
    },
    imageBox:{
      marginBottom:-10,
      width:'100%',
      height:'60%',
      position:'relative',
      borderRadius:10
      
    },
    
    content:{

        padding:10,
        flexDirection:'row',
        direction:'inherit'
       
    },
    textoDescricao: {

        color: '#000',
        alignItems:'center',
        justifyContent:'center',
        fontSize:20

    },
    buttonPlay: {

        marginVertical: 10,
       
    },
    title:{

        color: '#000',
        fontSize: 17,
        marginLeft:10,
        fontWeight: 'bold',
        alignItems:'center'

    },
    image:{

        paddingHorizontal:10,
        height:40,
        width:40
    },
    
    imageBackground: {

         width: '100%',
        height: '100%', 
    
    },
   

=======
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 0,
  },
  header: {
    margin: 10,
    marginTop: 40,
    paddingTop: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  logo1: {
    display: "flex",
    alignSelf: "center",
    width: "80%",
    height: "100%",
    resizeMode: "contain",
    marginVertical: -100,
  },

  Logout: {
    marginLeft:300,
    position:'absolute',
    height: 40,
    width: 80,
    backgroundColor: "#b15241",
    borderWidth: 2,
    borderColor:'#f6c052',
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    
  },
  icone: {
    //padding: ,
  },
  headerButton: {
    alignItems: "center",
    display: "flex",
  },
  boxButton: {
    borderColor: "#000",
    borderRadius: 10,
    backgroundColor: "	#e3e8ec",
    alignItems: "center",
    justifyContent: "center",
    borderTopStartRadius: 20,
    borderBottomRightRadius: 10,
    height: 310,
    width: "90%",
    shadowOpacity: 0.5,
    elevation: 50,
    shadowRadius: 1,
    shadowOffset: { width: 57, height: 13 },
    margin: 10,
  },
  button: {
    height: 100,
    width: "100%",
    shadowColor: "#000000",
    backgroundColor: "#e3e8ec",
    borderTopWidth: 10,
    position: "relative",
    borderTopColor: "#c22",
    alignItems: "center",
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imageBox: {
    width: "100%",
    height: "67%",
    position: "relative",
  },

  content: {
    padding: 10,
    flexDirection: "row",
    direction: "inherit",
  },
  textoDescricao: {
    padding: 10,
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
  },
  buttonPlay: {
    marginVertical: 10,
  },
  title: {
    color: "#000",
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "bold",
    alignItems: "center",
  },
  image: {
    paddingHorizontal: 10,
    height: 40,
    width: 40,
  },

  imageBackground: {
    width: "100%",
    height: "100%",
  },
>>>>>>> Pages
});

export default styles;
