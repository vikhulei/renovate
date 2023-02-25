import InteriorRenovation from "./01_interiorRenovation/InteriorRenovation"
import DesignAndBuild from "./02_designAndBuild/DesignAndBuild"
import TilingAndPainting from "./03_tilingAndPainting/TilingAndPainting"
import PaverWalkways from "./04_paverWalkways/PaverWalkways"
import HouseholdRepairs from "./05_householdRepairs/HouseholdRepairs"
import SolarSystems from "./06_solarSystems/SolarSystems"

const Services = () => {
    return (
        <>
        <InteriorRenovation />
        <DesignAndBuild />
        <TilingAndPainting />
        <PaverWalkways />
        <HouseholdRepairs />
        <SolarSystems />
        </>
    )
}

export default Services