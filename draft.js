{/* categories section*/}
<View style={styles.categoriesSection}>
<FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={categories}
    keyExtractor={item => item.id}
    style={styles.flatListStyle}
    renderItem={({ item }) => {
        isActive = item.id == activeCategory;
        return (
            <TouchableOpacity
                onPress={() => setActiveCategory(item.id)}
                style={{
                    backgroundColor: isActive ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
                    paddingVertical: 14,
                    paddingHorizontal: 16,
                    marginRight: 8,
                    marginLeft: 8,
                    borderRadius: 100,
                    elevation: 1,
                }}
            >
                <Text style={{ fontWeight: '600', color: isActive ? color = 'white' : color = 'white' }}>{item.title}</Text>
            </TouchableOpacity>
        )
    }}
/>
</View>
// 
// 

