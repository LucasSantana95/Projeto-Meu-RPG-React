export const WeaponButton = ({weapon, handleWeapon }) =>{
    return (
            <button 
                value={weapon.damage} 
                className="weapons-buttons"
                onClick={(e) => handleWeapon(weapon)}
            >
            {weapon.displayName}
            </button>
    )
}