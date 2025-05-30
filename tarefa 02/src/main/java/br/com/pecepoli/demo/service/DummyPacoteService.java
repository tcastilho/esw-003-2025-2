package br.com.pecepoli.demo.service;

import br.com.pecepoli.demo.dto.PacoteDTO;
import br.com.pecepoli.demo.dto.PacoteDTOMapper;
import br.com.pecepoli.demo.repository.DummyPacoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DummyPacoteService implements DummyService {
    private final DummyPacoteRepository dummyPacoteRepo;
    private final PacoteDTOMapper pacoteDTOMapper;

    public DummyPacoteService(DummyPacoteRepository repository, PacoteDTOMapper pacoteDTOMapper){
        this.dummyPacoteRepo = repository;
        this.pacoteDTOMapper = pacoteDTOMapper;
    }

    public List<PacoteDTO> obterTodos(){
        return dummyPacoteRepo.obterTodos()
                .stream()
                .map(pacoteDTOMapper)
                .collect(Collectors.toList());
    }
}
