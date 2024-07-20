package com.yourcompany.projectname.service;

import com.yourcompany.projectname.repository.PartRepository;
import com.yourcompany.projectname.repository.LineRepository;
import com.yourcompany.projectname.model.Part;
import com.yourcompany.projectname.model.Line;
import com.yourcompany.projectname.dto.LineDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartService {

    @Autowired
    private PartRepository partRepository;

    @Autowired
    private LineRepository lineRepository;

    public List<Part> getPartNumbers(int globalParameter) {
        if (globalParameter == 0) {
            return partRepository.findActivePartNumbers();
        } else {
            return partRepository.findEditablePartNumbers();
        }
    }

    public boolean checkPartNumberExistence(String partNumber, int globalParameter) {
        return partRepository.existsByPartNumber(partNumber);
    }

    public void savePart(Part part) {
        if (!partRepository.existsByPartNumber(part.getPartNumber())) {
            partRepository.save(part);
        } else {
            throw new IllegalArgumentException("Part already exists");
        }
    }

    public void updatePart(Part part) {
        if (partRepository.existsByPartNumber(part.getPartNumber())) {
            partRepository.save(part);
        } else {
            throw new IllegalArgumentException("Part does not exist");
        }
    }

    public List<LineDTO> getLineLov() {
        return lineRepository.getLineLov();
    }

    public List<LineDTO> getEditLineLov() {
        return lineRepository.getEditLineLov();
    }

    public boolean validateLineId(String lineId, String lineDesc, String unitId, String groupId) {
        return lineRepository.validateLineId(lineId, lineDesc, unitId, groupId);
    }
}
